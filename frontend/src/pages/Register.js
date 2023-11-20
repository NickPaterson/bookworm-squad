import React from 'react';
import RegistrationForm from '../components/RegistrationForm';  

const Register = () => {
    return (
        <>
        <div className='mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4'>
            <div className="container mx-auto flex flex-wrap justify-center text-blue-gray-900">
                <RegistrationForm />
            </div>
        </div>
        </>
    );
};

export default Register;