import { Fragment, useState } from 'react';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { SideMenu } from './SideMenu/SideMenu';

const SideBar = (props) => {

    const { handleOpenDrawer, openDrawer, setOpenDrawer } = props;

    return (
        <div className="bg-white">
            <Transition.Root show={openDrawer} as={Fragment}>
                <Dialog as="div" static className="fixed z-50 overflow-hidden" open={openDrawer} onClose={setOpenDrawer}>
                    <div className="fixed overflow-hidden">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in duration-500"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-out duration-500"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed max-w-screen-lg mx-auto inset-0 bg-gray-300 bg-opacity-0">

                                <div className="pl-0 pr-12 left-0 inset-0 max-w-full h-screen flex bg-transparent">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="transform transition ease-in duration-500 sm:duration-700"
                                        enterFrom="-translate-x-full"
                                        enterTo="-translate-x-0"
                                        leave="transform transition ease-out duration-500 sm:duration-700"
                                        leaveFrom="-translate-x-0"
                                        leaveTo="-translate-x-full"
                                    >
                                        <div className="relative inset-0 w-screen max-w-md">
                                            <Transition.Child
                                                as={Fragment}
                                                enter="ease-in duration-500"
                                                enterFrom="opacity-0"
                                                enterTo="opacity-100"
                                                leave="ease-out duration-500"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <div className="absolute bg-blue-400 top-2 shadow-md right-0 -mr-10 p-1 flex justify-center items-center sm:-mr-10 rounded-tr-full rounded-br-full">
                                                    <button
                                                        className="rounded-lg text-white hover:text-red-700 focus:outline-none"
                                                        onClick={handleOpenDrawer}
                                                    >
                                                        <span className="sr-only">Close panel</span>
                                                        <XIcon className="h-8 w-8" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </Transition.Child>
                                            <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-auto">
                                                <div className="p-4 sm:px-6 cursor-pointer" onMouseDown={handleOpenDrawer}>
                                                    <Dialog.Title className="text-lg text-gray-900 uppercase font-extrabold tracking-wider">
                                                        <Link href="/">
                                                            <a>geofinmaps</a>
                                                        </Link>
                                                    </Dialog.Title>
                                                </div>
                                                <div className="mt-4 relative flex-1 px-4 sm:px-6">
                                                    <div className="absolute inset-0 px-4 sm:px-6">
                                                        <div className="w-full max-w-md my-4">
                                                            <ul className="flex flex-col items-center justify-center w-full h-full">
                                                                {
                                                                    SideMenu.map((item, index) => {
                                                                        return (
                                                                            <div className="w-full" key={index}>
                                                                                <Link href={item.url}>
                                                                                    <a>
                                                                                        <li onMouseDown={handleOpenDrawer} className="list-none h-full mx-auto p-3 cursor-pointer font-bold uppercase hover:shadow-md hover:bg-yellow-400 hover:text-white ease-in-out">
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
                                                </div>
                                            </div>
                                        </div>
                                    </Transition.Child>
                                </div>

                            </Dialog.Overlay>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    );
}

export default SideBar;

