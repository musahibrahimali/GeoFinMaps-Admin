import Link from 'next/link';
import { MenuItems } from '../navigation';

const DropDown = () => {
    return (
        <div className="bg-white w-96 mx-4 py-2 flex justify-center items-center">
            <div className="w-full max-w-md">
                <ul className="flex flex-col items-center justify-center w-full h-full">
                    {
                        MenuItems.map((item, index) => {
                            return (
                                <div className="w-full" key={index}>
                                    <Link href={item.url}>
                                        <a>
                                            <li className="nav__item">
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