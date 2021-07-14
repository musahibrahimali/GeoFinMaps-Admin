import { useState } from 'react'
import Link from 'next/link';
import { MenuIcon } from "@heroicons/react/outline";
import { DropDown } from '../../navigation';

const NavBar = (props) => {
    const [mouseEnter, setMouseEnter] = useState(false);

    const handleOnMouseEnter = (event) => {
        event.preventDefault();
        setMouseEnter(true);
    }

    const handleOnMouseLeave = (event) => {
        event.preventDefault();
        setMouseEnter(false);
    }

    const { handleOpenDrawer } = props;

    return (
        <nav className="main__navbar navbar_t px-2">
            <div className="flex flex-row items-center justify-between">
                <div className="cursor-pointer">
                    <h1 className="brand__logo">
                        <Link href="/">
                            <a>geofinmaps</a>
                        </Link>
                    </h1>
                </div>
            </div>
            <div className="navlist__container">
                <ul className="nav__list">
                    <li
                        className="dropdown__list__option"
                        onMouseEnter={handleOnMouseEnter}
                        onMouseLeave={handleOnMouseLeave}
                    >
                        <Link href="#" >
                            <a>
                                options
                                <div className="absolute -left-full mx-auto mt-4 mr-4">
                                    {
                                        mouseEnter && <DropDown />
                                    }
                                </div>
                            </a>
                        </Link>
                    </li>
                    <li className="navbar__item text-gray-800 dark:text-gray-200">
                        <Link href="/help">
                            <a>
                                help
                            </a>
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link href="/loglanding">
                            <a>
                                Log In
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex flex-end md:hidden">
                <div className="cursor-pointer mr-4" onMouseDown={handleOpenDrawer}>
                    <MenuIcon className="h-8 w-8 text-gray-800 dark:text-gray-50" aria-hidden="true" />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;