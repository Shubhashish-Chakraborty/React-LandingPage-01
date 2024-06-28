import React, { useState } from 'react';

export const Navbar = () => {
    const [isSignUpOpen, setSignUpOpen] = useState(false);
    const [isSignInOpen, setSignInOpen] = useState(false);

    return (
        <>
            <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full z-50">
                <div className="container mx-auto flex items-center justify-between flex-wrap">
                    <a href="https://www.github.com/Shubhashish-Chakraborty?tab=repositories" target="_blank" className="flex items-center">
                        <img src="https://avatars.githubusercontent.com/u/164302071?s=400&u=45e955948ca315aab721050339902ba81ff26939&v=4" alt="Profile Picture" className="w-10 h-10 rounded-full"/>
                        <span className="ml-3 text-white font-semibold">Source Code</span>
                    </a>
                    <div className="text-center flex-1">
                        <span className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold"><i>Courses</i></span>
                        <p className='text-cyan-300 hover:text-red-400 cursor-pointer'><strong>Made By Shubhashish Chakraborty</strong></p>
                    </div>
                    <div className="flex items-center">
                        <button onClick={() => setSignUpOpen(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">SignUp</button>
                        <button onClick={() => setSignInOpen(true)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Login</button>
                    </div>
                </div>
            </nav>

            {isSignUpOpen && (
                <SignUpModal onClose={() => setSignUpOpen(false)} />
            )}

            {isSignInOpen && (
                <SignInModal onClose={() => setSignInOpen(false)} />
            )}
        </>
    );
};

const SignUpModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded shadow-lg w-11/12 sm:w-96">
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name"/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email"/>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign Up
                        </button>
                        <button onClick={onClose} className="text-red-500 hover:text-red-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const SignInModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded shadow-lg w-11/12 sm:w-96">
                <h2 className="text-2xl font-bold mb-4">Sign In</h2>
                <form>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email"/>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                        <button onClick={onClose} className="text-red-500 hover:text-red-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
