import Link from 'next/link';
import { MenuItems } from '../navigation';

const DropDown = () => {
    return (
        <div
            className="bg-white dark:bg-gray-900 w-96 custom__shadow mx-4 py-2 flex justify-center items-center border border-solid border-gray-300 dark:border-gray-600"
        >
            <div className="w-full max-w-md bg-white dark:bg-gray-900">
                <ul className="sidenav__list bg-white dark:bg-gray-900">
                    {
                        MenuItems.map((item, index) => {
                            return (
                                <div className="w-full" key={index}>
                                    <Link href={item.url}>
                                        <a>
                                            <li className="sidenav__item">
                                                {item.name}
                                            </li>
                                        </a>
                                    </Link>
                                </div>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default DropDown;