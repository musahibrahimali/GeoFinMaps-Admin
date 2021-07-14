import React from 'react';
import LogInForm from './LogInForm/LogInForm';

function SignInForm() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div>
                <h1 className="text-gray-900 font-bold tracking-widest mb-4 uppercase text-2xl md:text-4xl">
                    Sign In
                </h1>
            </div>
            <LogInForm />
        </div>
    )
}

export default SignInForm;
