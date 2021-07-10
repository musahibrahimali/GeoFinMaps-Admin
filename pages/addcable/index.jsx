import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Image13 } from '../../assets/AssetExport';

const AddCable = () => {
    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=7" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>GeofinMaps Admin | Data Section</title>
                <meta name="description" content="The admin panel of the geofinmaps application for mtn ghana" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-white dark:bg-gray-900">
                <div
                    className="h-full shadow-md border border-gray-200 dark:border-gray-600
                    mb-4 rounded-xl bg-white dark:bg-gray-900 overflow-hidden mt-6 grid gap-0 grid-cols-6 grid-rows-1"
                >
                    <div
                        className="col-span-2 h-full w-full bg-yellow-500 dark:bg-gray-900 flex justify-center items-center">
                        <Image
                            src={Image13}
                            width={1000}
                            height={1000}
                            alt="cable graphics"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="col-span-4 h-full overflow-auto flex justify-center items-center mx-0 border-l border-gray-200 dark:border-gray-600">
                        <div className="w-full h-full p-6 bg-white dark:bg-gray-900">
                            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight mt-4 text-gray-700 dark:text-gray-200 text-center md:text-left">
                                Add Cable Laying
                            </h1>

                            <form className="mt-6" action="#" method="POST">
                                <div className="mt-4">
                                    <label className="block text-lg md:text-xl text-gray-700 dark:text-gray-200">
                                        City or Town
                                    </label>
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="Adansi North, Fomena"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-200 dark:bg-gray-200 mt-2 border focus:border-yellow-500 focus:bg-white focus:outline-none"
                                        autoFocus
                                        required
                                    />
                                </div>

                                <div className="mt-4">
                                    <label className="block text-gray-700 text-lg md:text-xl dark:text-gray-200">
                                        Latitude
                                    </label>
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="123.467"
                                        className="w-full px-4 py-3 rounded-lg dark:bg-gray-200 bg-gray-200 mt-2 border focus:border-yellow-500 focus:bg-white focus:outline-none" autoFocus
                                        required
                                    />
                                </div>

                                <div className="mt-4">
                                    <label className="block  text-gray-700 text-lg md:text-xl dark:text-gray-200">
                                        Longitude
                                    </label>
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="-123.2345"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-200 dark:bg-gray-200 mt-2 border focus:border-yellow-500 focus:bg-white focus:outline-none"
                                        required
                                    />
                                </div>

                                <div className="mt-4">
                                    <label className="block  text-gray-700 text-lg md:text-xl dark:text-gray-200">
                                        Cable Specification
                                    </label>
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="size of cable"
                                        minLength="6"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-200 dark:bg-gray-200 mt-2 border focus:border-yellow-500 focus:bg-white focus:outline-none"

                                    />
                                </div>

                                <div className="mt-4">
                                    <label className="block  text-gray-700 text-lg md:text-xl dark:text-gray-200">
                                        Cable Details
                                    </label>
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="Information about the cable"
                                        minLength="150"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-200 dark:bg-gray-200 mt-2 border focus:border-yellow-500 focus:bg-white focus:outline-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full uppercase border border-gray-400 border-opacity-0 dark:border-gray-600 block bg-gray-900 hover:bg-gray-800 focus:bg-gray-400 text-gray-100 font-semibold rounded-lg px-4 py-3 mt-6 dark:bg-yellow-600 dark:text-gray-100 dark:hover:bg-transparent dark:hover:text-gray-200 dark:hover:border-gray-300 transition-all ease-in-out duration-150"
                                >
                                    Add Data
                                </button>
                            </form>

                            <hr className="my-6 border-gray-300 dark:border-gray-600 w-full" />

                            <button type="button"
                                className="w-full block bg-white hover:bg-gray-500 dark:bg-transparent dark:hover:bg-gray-200 dark:text-gray-100 dark:hover:text-gray-900 focus:bg-gray-100 text-gray-700 hover:text-gray-100 font-semibold rounded-lg px-4 py-3 border border-gray-300 dark:border-gray-400"
                            >
                                <div className="flex items-center justify-center">
                                    <Link href='/addcable/loadfile'>
                                        <a>
                                            <span className="ml-4">
                                                Load a JSON File
                                            </span>
                                        </a>
                                    </Link>
                                </div>
                            </button>
                        </div>

                    </div>
                </div>

            </main>
        </>
    );
}

export default AddCable;