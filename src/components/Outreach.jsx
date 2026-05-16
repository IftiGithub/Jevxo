import {
    EnvelopeIcon,
    MapPinIcon,
    PhoneIcon,
    GlobeAltIcon,
    ShareIcon
} from '@heroicons/react/24/outline';
import logo from "../assets/Jevxo.png"

const Outreach = () => {
    return (
        <footer className="bg-[#0B0F17] text-white pt-24 pb-12 px-6 md:px-12 lg:px-24 border-t border-2px border-blue-700">
            <div className="max-w-7xl mx-auto">

                {/* Contact Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

                    {/* Left Column: Info */}
                    <div className="flex flex-col justify-center">
                        {/* Logo Placeholder */}
                        <div>
                            <img className='h-13 w-27' src={logo} alt="" />
                        </div>
                        <h2 className="text-5xl font-bold text-[#2E7BFF] mb-6">Contact Us</h2>
                        <p className="text-[#E9B66F] text-sm max-w-md leading-relaxed mb-12">
                            We are committed to processing the information in order to contact you and talk about your project.
                        </p>

                        {/* Contact Details */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="p-2 border border-[#E9B66F]/30 rounded-lg group-hover:bg-[#E9B66F]/10 transition-colors">
                                    <EnvelopeIcon className="w-5 h-5 text-[#E9B66F]" />
                                </div>
                                <span className="text-blue-400 text-sm">example@teamwebflow.com</span>
                            </div>

                            <div className="flex items-start gap-4 group cursor-pointer">
                                <div className="p-2 border border-[#E9B66F]/30 rounded-lg group-hover:bg-[#E9B66F]/10 transition-colors">
                                    <MapPinIcon className="w-5 h-5 text-[#E9B66F]" />
                                </div>
                                <div className="flex flex-col text-blue-400 text-sm">
                                    <span>dsfdfdf</span>
                                    <span>dffdsfdsd</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="p-2 border border-[#E9B66F]/30 rounded-lg group-hover:bg-[#E9B66F]/10 transition-colors">
                                    <PhoneIcon className="w-5 h-5 text-[#E9B66F]" />
                                </div>
                                <span className="text-blue-400 text-sm">+123456789</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="space-y-4">
                        <div className="bg-white rounded-xl overflow-hidden">
                            <input
                                type="text"
                                placeholder="Name*"
                                className="w-full p-4 text-gray-800 outline-none placeholder:text-gray-400"
                            />
                        </div>
                        <div className="bg-white rounded-xl overflow-hidden">
                            <input
                                type="email"
                                placeholder="Email*"
                                className="w-full p-4 text-gray-800 outline-none placeholder:text-gray-400"
                            />
                        </div>
                        <div className="bg-white rounded-xl overflow-hidden">
                            <input
                                type="text"
                                placeholder="Website*"
                                className="w-full p-4 text-gray-800 outline-none placeholder:text-gray-400"
                            />
                        </div>
                        <div className="bg-white rounded-xl overflow-hidden">
                            <textarea
                                rows="4"
                                placeholder="Message"
                                className="w-full p-4 text-gray-800 outline-none placeholder:text-gray-400 resize-none"
                            ></textarea>
                        </div>
                        <button className="w-full bg-[#E9B66F] hover:bg-[#d4a35f] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#E9B66F]/10">
                            Submit
                        </button>
                    </div>
                </div>

                {/* Footer Navigation Section */}
                <div className="border-t border-white/5 pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand & Socials */}
                    <div className="flex flex-col justify-between">
                        <p className="text-gray-500 text-sm max-w-[200px] mb-8">
                            The partner for enterprises building the next generation of digital empires.
                        </p>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer border border-white/10 transition-all">
                                <GlobeAltIcon className="w-4 h-4 text-[#E9B66F]" />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer border border-white/10 transition-all">
                                <ShareIcon className="w-4 h-4 text-[#E9B66F]" />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer border border-white/10 transition-all">
                                <EnvelopeIcon className="w-4 h-4 text-[#E9B66F]" />
                            </div>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">Platform</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li className="hover:text-white cursor-pointer transition-colors">The Hub</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
                            <li className="hover:text-white cursor-pointer transition-colors">ROI Calculator</li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
                        </ul>
                    </div>

                    {/* Links Column 3 */}
                    <div>
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li className="hover:text-white cursor-pointer transition-colors">Privacy</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Terms</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Cookie Policy</li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Outreach;