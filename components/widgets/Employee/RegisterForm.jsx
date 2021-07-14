import React from 'react';
import SignUpForm from './SignUpForm/SignUpForm';

function RegisterForm() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div>
                <h1 className="text-gray-800 font-bold tracking-widest uppercase mb-4 text-2xl md:text-4xl">
                    Sign Up
                </h1>
            </div>
            <SignUpForm />
        </div>
    )
}

export default RegisterForm;
