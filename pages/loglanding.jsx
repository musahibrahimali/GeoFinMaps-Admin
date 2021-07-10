import Head from 'next/head';
import Image from 'next/image';
import { Image13 } from '../assets/AssetExport';

const LogLanding = () => {
    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=7" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>GeofinMaps Admin | Authentication</title>
                <meta name="description" content="The admin panel of the geofinmaps application for mtn ghana" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-white dark:bg-gray-900">
                <div
                    className="h-full shadow-md border border-gray-200 dark:border-gray-600
                    mx-2 mb-4 rounded-xl bg-white dark:bg-gray-900 overflow-hidden mt-6 grid gap-2 grid-cols-6 grid-rows-1 "
                >
                    <div
                        className="col-span-2 h-full bg-green-600 dark:bg-gray-900 flex justify-center items-center"
                    >
                        <Image
                            src={Image13}
                            width={1000}
                            height={1000}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="col-span-4 h-full overflow-auto flex justify-center items-center mx-2 border-l border-gray-200 dark:border-gray-600">
                        <div className="w-full h-full p-4 bg-white dark:bg-gray-900">
                            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight mt-4 text-gray-700 dark:text-gray-200 text-center md:text-left">
                                Log in to your account
                            </h1>

                            <form className="mt-6" action="#" method="POST">
                                <div>
                                    <label className="block text-gray-700 dark:text-gray-200">
                                        Email Address
                                    </label>
                                    <input
                                        type="email" name=""
                                        id=""
                                        placeholder="Enter Email Address"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus
                                        autoComplete required
                                    />
                                </div>

                                <div className="mt-4">
                                    <label className="block  text-gray-700 dark:text-gray-200">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="" id=""
                                        placeholder="Enter Password"
                                        minLength="6"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                        required
                                    />
                                </div>

                                <div className="text-right mt-2">
                                    <a
                                        href="#"
                                        className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-700 focus:text-blue-700"
                                    >
                                        Forgot Password?
                                    </a>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full border border-gray-400 dark:border-gray-400 block bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-400 text-gray-100 font-semibold rounded-lg px-4 py-3 mt-6 dark:bg-indigo-600 dark:hover:bg-transparent dark:hover:border-gray-300 transition-all ease-in-out duration-150"
                                >
                                    Log In
                                </button>
                            </form>

                            <hr className="my-6 border-gray-300 dark:border-gray-600 w-full" />

                            <button type="button"
                                className="w-full block bg-white hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-200 dark:text-gray-100 dark:hover:text-gray-900 focus:bg-gray-100 text-gray-700 hover:text-gray-100 font-semibold rounded-lg px-4 py-3 border border-gray-300 dark:border-gray-400"
                            >
                                <div className="flex items-center justify-center">
                                    {/* some image // google logo */}
                                    <span className="ml-4">
                                        Log in with Google
                                    </span>
                                </div>
                            </button>

                            <p className="mt-8 text-gray-700 dark:text-gray-200">
                                Need an account? {"  "}
                                <a href="#"
                                    className="text-blue-500 dark:text-green-500 dark:hover:text-green-700 hover:text-blue-700 font-semibold"
                                >
                                    Create an account
                                </a>
                            </p>
                        </div>

                    </div>
                </div>

            </main>
        </>
    )
}

export default LogLanding;