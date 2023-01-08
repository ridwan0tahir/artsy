import { Link, useLocation } from "react-router-dom";
import { useToggle } from "usehooks-ts";
import classNames from "classnames";

import Notification from "components/icons/Notification";
import Button from "components/common/Button";
import NavLinkConfigs from "configs/NavLinkConfigs";
import { FunctionComponent, useLayoutEffect } from "react";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { BsFillChatRightFill } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";

interface IHeader {}

const Header: FunctionComponent<IHeader> = () => {
  const [navActive, toggleNavActive, setNavActive] = useToggle(false);

  const location = useLocation();

  useLayoutEffect(() => {
    if (navActive) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [navActive]);

  return (
    <div className="w-[90%] mx-auto py-5 flex justify-between items-center lg:py-12 md:w-10/12">
      <Button
        as="button"
        className="lg:hidden"
        onClick={() => setNavActive(true)}
      >
        <AiOutlineMenu />
      </Button>

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
          <Button onClick={() => setNavActive(false)}>
            <GrClose />
          </Button>
        </div>

        <ul className="flex flex-col gap-5 lg:flex-row lg:gap-12">
          {NavLinkConfigs.map((link) => (
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

        <Button
          className="w-16 h-16 rounded-full bg-blue-01 flex justify-center items-center 
          ml-auto mt-auto mb-10 lg:hidden"
        >
          <BsFillChatRightFill />
        </Button>
      </nav>

      <div className="flex items-center gap-4 lg:gap-8">
        {[<IoMdSearch />, <AiOutlineShoppingCart />, <FaRegBell />].map(
          (icon, index) => (
            <Button
              key={index}
              className="last:hidden lg:last:inline lg:hover:-translate-y-1 lg:transition lg:ease-in-out lg:duration-100"
            >
              {icon}
            </Button>
          )
        )}
      </div>
    </div>
  );
};

export default Header;
