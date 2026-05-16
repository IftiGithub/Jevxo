import React, { useState } from 'react';
import logo from '../assets/Jevxo.png';
import { Lock, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "The Hub", href: "#", active: true },
        { name: "Solutions", href: "#", hasDropdown: true },
        { name: "Products", href: "#" },
        { name: "Success Stories", href: "#" },
        { name: "Partnership", href: "#", hasDropdown: true },
    ];

    return (
        /* 1. Added 'sticky top-0' and 'backdrop-blur' to the wrapper */
        <nav className="sticky top-0 w-full py-4 px-4 z-[100] flex justify-center backdrop-blur-sm">

            {/* 2. Glassmorphism Container: Added bg-opacity and backdrop-blur */}
            <div className="navbar bg-[#0B0F17]/80 backdrop-blur-md text-white rounded-2xl border border-white/10 px-4 md:px-6 min-h-[64px] max-w-7xl w-full shadow-2xl transition-all duration-300">

                {/* Mobile Menu Toggle */}
                <div className="navbar-start lg:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="btn btn-ghost btn-circle text-gray-300"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Desktop Logo */}
                <div className="navbar-start hidden lg:flex">
                    <a className="flex items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                        <img className="h-6 md:h-7 w-auto" src={logo} alt="Jevxo Logo" />
                    </a>
                </div>

                {/* Mobile Center Logo */}
                <div className="navbar-center lg:hidden">
                    <img className="h-6 w-auto" src={logo} alt="Jevxo Logo" />
                </div>

                {/* Desktop Navigation Links */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2 xl:gap-6 text-[14px] xl:text-[15px] font-medium text-gray-400">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                {link.hasDropdown ? (
                                    <details className="dropdown">
                                        <summary className="hover:text-white flex items-center gap-1 cursor-pointer py-2">
                                            {link.name}
                                            <svg className="fill-current opacity-60" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                        </summary>
                                        <ul className="p-2 bg-[#161B22]/90 backdrop-blur-lg border border-white/10 rounded-lg w-48 mt-4 shadow-xl">
                                            <li><a className="hover:bg-white/10">Option 1</a></li>
                                            <li><a className="hover:bg-white/10">Option 2</a></li>
                                        </ul>
                                    </details>
                                ) : (
                                    <a className={`${link.active ? 'text-blue-400' : 'hover:text-white'} transition-colors py-2`}>
                                        {link.name}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Section */}
                <div className="navbar-end flex items-center gap-2 md:gap-4">
                    <button className="hidden sm:flex btn btn-sm md:btn-md border-none bg-gradient-to-r from-[#E9B66F] to-[#D99A4D] hover:scale-105 active:scale-95 transition-transform text-white font-semibold rounded-xl px-4 md:px-6 capitalize">
                        Launch Project
                    </button>

                    <div className="cursor-pointer text-blue-500 hover:text-blue-400 p-1">
                        <Lock size={18} className="md:w-5 md:h-5" />
                    </div>

                    <div className="hidden sm:flex items-center bg-white/5 rounded-full p-1 border border-white/10 cursor-pointer">
                        <div className="w-12 h-6 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-full relative flex items-center px-1">
                            <div className="w-4 h-4 bg-white rounded-full shadow-inner"></div>
                            <div className="ml-auto opacity-40">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Glass Sidebar */}
            {isMenuOpen && (
                <div className="absolute top-20 left-4 right-4 bg-[#0B0F17]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl lg:hidden animate-in fade-in zoom-in-95 duration-200">
                    <ul className="flex flex-col gap-4 text-gray-300 font-medium">
                        {navLinks.map((link) => (
                            <li key={link.name} className="border-b border-white/5 pb-2 last:border-0">
                                <a href={link.href} className={link.active ? 'text-blue-400' : ''}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li><button className="btn w-full border-none bg-gradient-to-r from-[#E9B66F] to-[#D99A4D] text-white font-bold rounded-xl">
                            Launch Your Project
                        </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;