import Link from 'next/link';
import { MenuIcon } from "@heroicons/react/outline";

const NavBar = (props) => {

    const { handleOpenDrawer } = props;

    return (
        <nav className="max-w-screen-lg mx-auto flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-between">
                <div className="cursor-pointer mr-4" onMouseDown={handleOpenDrawer}>
                    <MenuIcon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="cursor-pointer">
                    <h1 className="text-black text-center text-lg uppercase font-extrabold tracking-wider">
                        <Link href="/">
                            <a>geofinmaps</a>
                        </Link>
                    </h1>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between">
                <ul className="flex flex-row items-center justify-between h-full text-center">
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
        </nav>
    );
}

export default NavBar;