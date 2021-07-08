import { Fragment } from 'react';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { MenuItems } from '../navigation';

const SideBar = (props) => {

    const { handleOpenDrawer, openDrawer, setOpenDrawer } = props;

    return (
        <div className="bg-white">
            <Transition.Root show={openDrawer} as={Fragment}>
                <Dialog as="div" static className="fixed z-50 inset-0 overflow-hidden" open={openDrawer} onClose={setOpenDrawer}>
                    <div className="absolute inset-0 overflow-hidden">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-500"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in-out duration-500"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>
                        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <div className="relative w-screen max-w-md">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-500"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-500"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                                            <button
                                                className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                onClick={handleOpenDrawer}
                                            >
                                                <span className="sr-only">Close panel</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                                        <div className="p-4 sm:px-6 cursor-pointer" onMouseDown={handleOpenDrawer}>
                                            <Dialog.Title className="text-lg text-gray-900 uppercase font-extrabold tracking-wider">
                                                <Link href="#">
                                                    <a>geofinmaps</a>
                                                </Link>
                                            </Dialog.Title>
                                        </div>
                                        <div className="mt-6 relative flex-1 px-4 sm:px-6">
                                            {/* panel content */}
                                            <div className="absolute inset-0 px-4 sm:px-6">
                                                <div className="w-full max-w-md my-4">
                                                    <ul
                                                        className="flex flex-col items-center justify-center w-full h-full"
                                                    >
                                                        {
                                                            MenuItems.map((item, index) => {
                                                                return (
                                                                    <div className="w-full" key={index}>
                                                                        <Link href={item.url}>
                                                                            <a>
                                                                                <li
                                                                                    onMouseDown={handleOpenDrawer}
                                                                                    className="nav__item"
                                                                                >
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
                                            {/* /End panel content */}
                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    );
}

export default SideBar;

