import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Image13 } from '../assets/AssetExport';

const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const LogLanding = () => {

    const [register, setRegister] = useState(false);
    const [values, setValues] = useState(initialValues);

    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    const handleSwitch = (event) => {
        event.preventDefault();
        setRegister(!register);
    }

    // decide on the authentication method to call
    const handleAuth = () => {
        if (register) {
            handleSignUp();
        } else {
            handleSignIn();
        }
    }

    // decode on google authentication method to call
    const handleGoogleAuth = () => {
        if (register) {
            handleSignUpWithGoogle();
        } else {
            handleSignInWithGoogle();
        }
    }

    // const handle sign in
    const handleSignIn = () => {
        console.log("Sign in");
    }

    // handle sign up
    const handleSignUp = () => {

        console.log("Sign Up");
    }

    // handle sign up with google
    const handleSignUpWithGoogle = () => {
        console.log("Sign up with google");

    }

    // handle sign in with google
    const handleSignInWithGoogle = () => {
        console.log("Sign in with google");
    }

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
                    mx-2 mb-4 rounded-xl bg-white dark:bg-gray-900 overflow-hidden mt-6 grid gap-0 grid-cols-6 grid-rows-1 "
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
                    <div className="col-span-4 h-full overflow-auto flex justify-center items-center border-l border-gray-200 dark:border-gray-600">
                        <div className="w-full h-full p-4 bg-white dark:bg-gray-900">
                            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight mt-4 text-gray-700 dark:text-gray-200 text-center md:text-left">
                                {register ? "Sign up for an account" : "Log in to your account"}
                            </h1>

                            <form className="mt-6" action="#" method="POST">

                                {/* add this if regiser is true */}
                                {register ?
                                    <div>
                                        <label htmlFor="name" className="block text-gray-700 dark:text-gray-200">
                                            User Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={values.name}
                                            onChange={handleInputChange}
                                            placeholder="Enter Email Address"
                                            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus
                                            required
                                        />
                                    </div> : <div></div>
                                }

                                <div className="mt-4">
                                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-200">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter Email Address"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus
                                        required
                                    />
                                </div>

                                <div className="mt-4">
                                    <label htmlFor="passowrd" className="block  text-gray-700 dark:text-gray-200">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleInputChange}
                                        placeholder="Enter Password"
                                        minLength="8"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                        required
                                    />
                                </div>

                                {/* add this on sign up */}

                                {
                                    register ? <div className="mt-4">
                                        <label htmlFor="confirm password" className="block  text-gray-700 dark:text-gray-200">
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            name="confirm-password"
                                            value={values.confirmPassword}
                                            onChange={handleInputChange}
                                            placeholder="repeat Password"
                                            minLength="8"
                                            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                            required
                                        />
                                    </div> : <div></div>
                                }

                                {/* end add this on sign up */}

                                {
                                    register ? <div></div>
                                        :
                                        <div className="text-right mt-2">
                                            <Link href="#">
                                                <a
                                                    className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-700 focus:text-blue-700"
                                                >
                                                    Forgot Password?
                                                </a>
                                            </Link>
                                        </div>
                                }

                                <button
                                    type="button"
                                    onMouseDown={handleAuth}
                                    className="w-full uppercase border border-gray-400 border-opacity-0 dark:border-gray-600 block bg-gray-900 hover:bg-gray-800 focus:bg-gray-400 text-gray-100 font-semibold rounded-lg px-4 py-3 mt-6 dark:bg-yellow-600 dark:text-gray-100 dark:hover:bg-transparent dark:hover:text-gray-200 dark:hover:border-gray-300 transition-all ease-in-out duration-150"
                                >
                                    {register ? "Register" : "Log In"}
                                </button>
                            </form>

                            <hr className="my-6 border-gray-300 dark:border-gray-600 w-full" />

                            <button
                                type="button"
                                onMouseDown={handleGoogleAuth}
                                className="w-full block bg-white hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-200 dark:text-gray-100 dark:hover:text-gray-900 focus:bg-gray-100 text-gray-700 hover:text-gray-100 font-semibold rounded-lg px-4 py-3 border border-gray-300 dark:border-gray-400"
                            >
                                <div className="flex items-center justify-center">
                                    {/* some image // google logo */}
                                    <span className="ml-4">
                                        {register ? "Register with Google" : "Sign in with Google"}
                                    </span>
                                </div>
                            </button>

                            <p className="mt-8 text-gray-700 dark:text-gray-200">
                                {register ? "Already have an account ? " : "Need an account ? "}{"  "}
                                <span onMouseDown={handleSwitch}
                                    className="text-blue-500 dark:text-green-500 dark:hover:text-green-700 hover:text-blue-700 font-semibold cursor-pointer"
                                >
                                    {register ? "Sign in" : "Create an account"}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default LogLanding;