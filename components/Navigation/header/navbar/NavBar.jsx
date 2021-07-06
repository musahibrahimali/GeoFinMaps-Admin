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
        <nav className="max-w-screen-lg mx-auto p-4 md:p-0 flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-between ml-2 md:ml-2 ">
                <div className="cursor-pointer">
                    <h1 className="text-black text-center text-lg uppercase font-extrabold tracking-wider">
                        <Link href="/">
                            <a>geofinmaps</a>
                        </Link>
                    </h1>
                </div>
            </div>
            <div className="md:flex flex-row items-center mr-2 md:mr-2 justify-between hidden">
                <ul className="flex flex-row items-center justify-between h-full text-center">
                    <Link href="#" >
                        <a>
                            <li
                                className=" relative list-none p-4 cursor-pointer font-bold capitalize hover:bg-yellow-400 hover:text-white"
                                onMouseEnter={handleOnMouseEnter}
                                onMouseLeave={handleOnMouseLeave}
                            >
                                options
                                <div className="absolute -left-full mx-auto mt-4 mr-4">
                                    {
                                        mouseEnter && <DropDown />
                                    }
                                </div>
                            </li>
                        </a>
                    </Link>
                    <Link href="/help">
                        <a>
                            <li className="list-none p-4 cursor-pointer font-bold capitalize hover:bg-yellow-400 hover:text-white">
                                help
                            </li>
                        </a>
                    </Link>
                    <Link href="/loglanding">
                        <a>
                            <li className="list-none p-4 cursor-pointer font-bold capitalize hover:bg-yellow-400 hover:text-white">
                                Log In
                            </li>
                        </a>
                    </Link>
                </ul>
            </div>
            <div className="flex flex-end md:hidden">
                <div className="cursor-pointer mr-4" onMouseDown={handleOpenDrawer}>
                    <MenuIcon className="h-8 w-8" aria-hidden="true" />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;