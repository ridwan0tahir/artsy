import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery, useToggle } from 'usehooks-ts';
import classNames from 'classnames';
import Button from 'components/common/Button';
import NavLinkConfigs from 'configs/NavLinkConfigs';
import { FunctionComponent, useLayoutEffect } from 'react';
import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { BsFillChatRightFill } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { FaRegBell } from 'react-icons/fa';

interface IHeader {}

const Header: FunctionComponent<IHeader> = () => {
  const [navActive, toggleNavActive, setNavActive] = useToggle(false);

  const location = useLocation();

  useLayoutEffect(() => {
    if (navActive) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => document.body.classList.remove('overflow-hidden');
  }, [navActive]);

  const matches = useMediaQuery('(max-width: 1024px)');

  return (
    <div className="flex justify-between items-center">
      <Button
        as="button"
        className="lg:hidden"
        onClick={() => setNavActive(true)}
      >
        <AiOutlineMenu size={20} />
      </Button>

      <Link
        to="/"
        className="text-[1.5rem] font-stix font-bold uppercase
      lg:text-[2rem] lg:leading-[5.625rem]"
      >
        Artsy.
      </Link>

      <nav
        className={classNames(
          'absolute top-0 h-full w-full flex flex-col gap-12 py-5 px-[5%] bg-white-01\
          z-40 ease-in-out duration-200 lg:unset',
          {
            ['-left-[1000px] invisible']: !navActive,
            ['left-0 visible']: navActive,
          }
        )}
      >
        <div className="w-full flex items-center justify-between lg:hidden">
          <Link to="/" className="text-[1.5rem] font-bold font-stix uppercase">
            Artsy.
          </Link>
          <Button onClick={() => setNavActive(false)}>
            <GrClose size={20} />
          </Button>
        </div>

        <ul className="flex flex-col gap-5 lg:flex-row lg:gap-12">
          {NavLinkConfigs.map((link) => (
            <li key={link.name}>
              <Link
                className={classNames(
                  'font-satoshi text-fs-50 text-black-03 md:font-normal lg:border-b-2\
                  lg:border-transparent lg:text-[1.5rem] lg:leading-[2.025rem]',
                  {
                    ['lg:!border-black-03 lg:!font-medium']:
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
          className="w-16 h-16 rounded-full bg-blue-01 flex justify-center
          items-center ml-auto mt-auto mb-10 lg:hidden"
        >
          <BsFillChatRightFill size={29} color="#FFF" />
        </Button>
      </nav>

      <div className="flex items-center gap-4 lg:gap-8">
        <BiSearch size={matches ? 20 : 28} className="cursor-pointer" />

        {[
          {
            icon: <AiOutlineShoppingCart size={matches ? 20 : 28} />,
            href: 'marketplace/checkout',
          },
          {
            icon: <FaRegBell size={matches ? 20 : 28} />,
            href: '/drop',
          },
        ].map(({ icon, href }, index) => (
          <Button
            as="link"
            to={href}
            key={index}
            className="last:hidden lg:last:inline"
          >
            {icon}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Header;
