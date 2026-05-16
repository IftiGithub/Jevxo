import { ChevronUpIcon } from '@heroicons/react/24/solid';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-[#0B0F17] border-t border-white/5 py-8 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto relative flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Copyright Section */}
                <div className="text-gray-500 text-sm order-2 md:order-1">
                    © 2023 Jevxo Enterprise. All rights reserved.
                </div>

                {/* Scroll to Top Button */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-12 md:static md:translate-x-0 md:order-2">
                    <button
                        onClick={scrollToTop}
                        className="w-12 h-12 bg-[#2E7BFF] rounded-full flex items-center justify-center hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(46,123,255,0.3)] group"
                    >
                        <ChevronUpIcon className="w-6 h-6 text-white group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>

                {/* System Status Section */}
                <div className="flex items-center gap-6 text-sm order-3">
                    <span className="text-gray-500 cursor-pointer hover:text-white transition-colors">
                        English (US)
                    </span>
                    <div className="flex items-center gap-2">
                        <span className="text-gray-500">System Status:</span>
                        <span className="text-[#6CC5B7] font-medium flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-[#6CC5B7] rounded-full animate-pulse"></span>
                            Online
                        </span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;