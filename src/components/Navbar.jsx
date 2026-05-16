import React from 'react';
import logo from '../assets/Jevxo.png';
import { Lock } from 'lucide-react'; // Install using: npm install lucide-react

const Navbar = () => {
    return (
        <div className="flex justify-center w-full py-4 px-4">
            {/* Main Navbar Container */}
            <div className="navbar bg-[#0B0F17] text-white rounded-2xl border border-gray-800 px-6 min-h-[64px] max-w-7xl w-full shadow-2xl">
                
                {/* Left: Logo */}
                <div className="navbar-start">
                    <a className="flex items-center gap-2 cursor-pointer">
                        <img className="h-7 w-auto" src={logo} alt="Jevxo Logo" />
                    </a>
                </div>

                {/* Center: Desktop Links */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6 text-[15px] font-medium text-gray-300">
                        <li><a className="text-[#3B82F6] hover:text-white transition-colors">The Hub</a></li>
                        <li>
                            <details className="dropdown">
                                <summary className="hover:text-white flex items-center gap-1 cursor-pointer">
                                    Solutions
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                                </summary>
                                <ul className="p-2 bg-[#161B22] border border-gray-700 rounded-lg w-48 mt-4">
                                    <li><a>Solution 1</a></li>
                                    <li><a>Solution 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a className="hover:text-white transition-colors">Products</a></li>
                        <li><a className="hover:text-white transition-colors">Success Stories</a></li>
                        <li>
                            <details className="dropdown">
                                <summary className="hover:text-white flex items-center gap-1 cursor-pointer">Partnership</summary>
                                <ul className="p-2 bg-[#161B22] border border-gray-700 rounded-lg w-48 mt-4">
                                    <li><a>Referral</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>

                {/* Right Section: CTA & Icons */}
                <div className="navbar-end flex items-center gap-4">
                    {/* Gradient CTA Button */}
                    <button className="hidden md:flex btn border-none bg-gradient-to-r from-[#E9B66F] to-[#D99A4D] hover:opacity-90 text-[#121212] font-semibold rounded-xl px-6 capitalize">
                        Launch Your Project
                    </button>

                    {/* Lock Icon */}
                    <div className="cursor-pointer text-blue-500 hover:text-blue-400">
                        <Lock size={20} />
                    </div>

                    {/* Theme Toggle (Night View) */}
                    <div className="hidden sm:flex items-center bg-[#1A1F2E] rounded-full p-1 border border-gray-700">
                        <div className="w-12 h-6 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-full relative flex items-center px-1">
                            {/* Represents the Moon/Landscape icon in your image */}
                            <div className="w-4 h-4 bg-white rounded-full shadow-inner"></div>
                            <div className="ml-auto opacity-40">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;