import { useState } from 'react';
import Head from 'next/head';
import { RegisterForm, LogInForm } from '../components/exports';


const LogLanding = () => {

    const [register, setRegister] = useState(false);

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

    // const handle sign in
    const handleSignIn = () => {
        console.log("Sign in");
    }

    // handle sign up
    const handleSignUp = () => {

        console.log("Sign Up");
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
            <main className=" mx-4 mt-8 mb-4 flex flex-col items-center justify-center">
                <div className="bg-white dark:bg-gray-200 p-10 flex justify-center items-center border border-gray-300 shadow-md rounded-md">
                    <div>
                        {
                            register ? <RegisterForm /> : <LogInForm />
                        }
                    </div>
                </div>
                <div>
                    <p className="mt-8 text-gray-700 dark:text-gray-200">
                        {register ? "Already have an account ? " : "Need an account ? "}{"  "}
                        <span onMouseDown={handleSwitch}
                            className="text-blue-500 dark:text-green-500 dark:hover:text-green-700 hover:text-blue-700 font-semibold cursor-pointer"
                        >
                            {register ? "Sign in" : "Create an account"}
                        </span>
                    </p>
                </div>
            </main>
        </>
    )
}

export default LogLanding;