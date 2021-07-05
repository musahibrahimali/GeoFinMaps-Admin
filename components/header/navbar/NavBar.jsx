import { MenuIcon } from "@heroicons/react/outline";
const NavBar = (props) => {

    const { handleSideBarActive } = props;

    return (
        <nav className="max-w-screen-lg mx-auto flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-between">
                <div className="cursor-pointer mr-4" onMouseDown={handleSideBarActive}>
                    <MenuIcon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="cursor-pointer">
                    <h1 className="text-black text-center text-lg uppercase font-extrabold tracking-wider">
                        geofinmaps
                    </h1>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between">
                <ul className="flex flex-row items-center justify-between h-full text-center">
                    <li className="list-none p-4 cursor-pointer font-bold capitalize hover:bg-yellow-400 hover:text-white">
                        help
                    </li>
                    <li className="list-none p-4 cursor-pointer font-bold capitalize hover:bg-yellow-400 hover:text-white">
                        Log In
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;