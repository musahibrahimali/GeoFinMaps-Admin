import Link from 'next/link';
import { SideMenu } from './SideMenu/SideMenu';
import { XIcon } from '@heroicons/react/outline'

const SideBar = (props) => {

    const { handleSideBarActive } = props;

    return (
        <div className="bg-white shadow-md w-96 h-screen px-5 py-1 fixed m-0">
            <div className="flex flex-col justify-between m-0">
                <div className="flex flex-col items-end justify-between">
                    <div className="cursor-pointer py-2" onMouseDown={handleSideBarActive}>
                        <XIcon className="h-8 w-8" aria-hidden="true" />
                    </div>
                </div>
                <div className="flex flex-col justify-between items-start bg-white my-4">
                    <div>
                        <ul className="flex flex-col items-start justify-start h-full">
                            {
                                SideMenu.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <li className="list-none h-full mx-auto w-80 p-3 cursor-pointer font-bold capitalize hover:bg-yellow-400 hover:text-white ease-in-out">
                                                <Link href={item.url}>
                                                    <a>{item.name}</a>
                                                </Link>
                                            </li>
                                        </div>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;