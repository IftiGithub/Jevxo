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
        <nav className="relative flex justify-center w-full py-4 px-4 z-50">
            {/* Main Navbar Container */}
            <div className="navbar bg-[#0B0F17] text-white rounded-2xl border border-gray-800 px-4 md:px-6 min-h-[64px] max-w-7xl w-full shadow-2xl">
                
                {/* Mobile Menu Toggle (Left on Mobile) */}
                <div className="navbar-start lg:hidden">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="btn btn-ghost btn-circle text-gray-300"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Logo Section */}
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
                                            <svg className="fill-current opacity-60" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                                        </summary>
                                        <ul className="p-2 bg-[#161B22] border border-gray-700 rounded-lg w-48 mt-4 shadow-xl">
                                            <li><a className="hover:bg-gray-800">Option 1</a></li>
                                            <li><a className="hover:bg-gray-800">Option 2</a></li>
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

                {/* Right Section: Icons & CTA */}
                <div className="navbar-end flex items-center gap-2 md:gap-4">
                    {/* CTA Button - Hidden on small mobile, visible on tablet+ */}
                    <button className="hidden sm:flex btn btn-sm md:btn-md border-none bg-gradient-to-r from-[#E9B66F] to-[#D99A4D] hover:opacity-90 text-[#121212] font-bold rounded-xl px-4 md:px-6 capitalize">
                        Launch Project
                    </button>

                    {/* Lock Icon */}
                    <div className="cursor-pointer text-blue-500 hover:text-blue-400 p-1">
                        <Lock size={18} className="md:w-5 md:h-5" />
                    </div>

                    {/* Theme Toggle - Hidden on mobile */}
                    <div className="hidden xs:flex items-center bg-[#1A1F2E] rounded-full p-1 border border-gray-700 cursor-pointer">
                        <div className="w-10 h-5 md:w-12 md:h-6 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-full relative flex items-center px-1">
                            <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full shadow-inner"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar/Dropdown Menu */}
            {isMenuOpen && (
                <div className="absolute top-20 left-4 right-4 bg-[#0B0F17] border border-gray-800 rounded-2xl p-4 shadow-2xl lg:hidden transition-all animate-in slide-in-from-top-2">
                    <ul className="flex flex-col gap-4 text-gray-300 font-medium">
                        {navLinks.map((link) => (
                            <li key={link.name} className="border-b border-gray-800 pb-2 last:border-0">
                                <a href={link.href} className={link.active ? 'text-blue-400' : ''}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li className="pt-2">
                            <button className="btn w-full border-none bg-gradient-to-r from-[#E9B66F] to-[#D99A4D] text-[#121212] font-bold rounded-xl">
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