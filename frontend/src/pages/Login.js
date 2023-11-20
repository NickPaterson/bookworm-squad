import React from 'react';
import LoginForm from '../components/LoginForm';  

const Login = () => {
    return (
        <>
        <div className='mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4'>
            <div className="container mx-auto flex flex-wrap justify-center text-blue-gray-900">
                <LoginForm />
            </div>
        </div>
        </>
    );
};

export default Login;