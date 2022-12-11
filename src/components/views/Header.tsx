import { Link, useLocation } from "react-router-dom";
import { useToggle } from "usehooks-ts";
import classNames from "classnames";

import Cart from "components/icons/Cart";
import Menu from "components/icons/Menu";
import Notification from "components/icons/Notification";
import Search from "components/icons/Search";
import ButtonIcon from "../common/ButtonIcon";
import NavLinks from "data/NavData";
import Close from "components/icons/Close";
import Chat from "components/icons/Chat";
import { useLayoutEffect } from "react";

interface IHeader {}

const Header = () => {
  const [navActive, toggleNavActive, setNavActive] = useToggle(false);

  const location = useLocation();

  useLayoutEffect(() => {
    if (navActive) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [navActive]);

  return (
    <div className="w-[90%] mx-auto py-5 flex justify-between items-center lg:py-12 md:w-10/12">
      <ButtonIcon
        onClick={() => setNavActive(true)}
        className="lg:hidden"
        content={<Menu />}
      />

      <Link to="/" className="text-fs-50 font-stix font-bold uppercase">
        Artsy.
      </Link>

      <nav
        className={classNames(
          "absolute top-0 h-full w-full flex flex-col gap-12 py-5 px-[5%] bg-white-01\
          z-40 ease-in-out duration-200 lg:unset",
          {
            ["-left-[1000px] invisible"]: !navActive,
            ["left-0 visible"]: navActive,
          }
        )}
      >
        <div className="w-full flex items-center justify-between lg:hidden">
          <Link to="/" className="text-fs-50 font-bold font-stix uppercase">
            Artsy.
          </Link>
          <ButtonIcon onClick={() => setNavActive(false)} content={<Close />} />
        </div>

        <ul className="flex flex-col gap-5 lg:flex-row lg:gap-12">
          {NavLinks.map((link) => (
            <li key={link.name}>
              <Link
                className={classNames(
                  "font-satoshi text-fs-50 text-black-03 md:font-normal lg:border-b-2 lg:border-transparent",
                  {
                    ["lg:!border-black-03 lg:!font-medium"]:
                      link.route === location.pathname,
                  }
                )}
                to={link.route}
                onClick={() => {
                  toggleNavActive();
                  setNavActive(false);
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ButtonIcon
          className="w-16 h-16 rounded-full bg-blue-01 flex justify-center items-center 
          ml-auto mt-auto mb-10 lg:hidden"
          content={<Chat />}
        />
      </nav>

      <div className="flex items-center gap-4 lg:gap-8">
        {[<Search />, <Cart />, <Notification />].map((comp, index) => (
          <ButtonIcon
            key={index}
            content={comp}
            className="last:hidden lg:last:inline lg:hover:-translate-y-1 lg:transition lg:ease-in-out lg:duration-100"
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
