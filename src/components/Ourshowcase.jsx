import { ArrowTopRightOnSquareIcon, ArrowRightIcon, Square3Stack3DIcon } from '@heroicons/react/24/outline';
import Legacy from "../assets/Image+VerticalBorder.png"
import Jevxo from "../assets/Image.png"
import container from "../assets/Container.png"
import {
    ChartBarIcon, // For statistical growth
    CloudIcon,    // For cloud
    CommandLineIcon,
    ShareIcon
} from '@heroicons/react/24/outline';

const OurShowcase = () => {
    const projects = [
        {
            title: "Project Nova",
            description: "Real-time AI monitoring dashboard for autonomous logistical fleets.",
            image: container
        },
        {
            title: "Project Nova",
            description: "Real-time AI monitoring dashboard for autonomous logistical fleets.",
            image: container
        },
        {
            title: "Project Nova",
            description: "Real-time AI monitoring dashboard for autonomous logistical fleets.",
            image: container
        },
        {
            title: "Project Nova",
            description: "Real-time AI monitoring dashboard for autonomous logistical fleets.",
            image: container
        }
    ];

    return (
        <section className="bg-[#0B0F17] text-white py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-5xl md:text-6xl font-bold text-[#2E7BFF] mb-4">Our Showcase</h2>
                        <p className="text-gray-400 text-lg">A glimpse into the empires we've built. Scroll to explore our portfolio.</p>
                    </div>
                    <button className="flex items-center gap-2 text-[#2E7BFF] font-bold hover:underline group">
                        Explore All <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Featured Case Study */}
                    <div className="lg:col-span-2 bg-[#151B28] rounded-[32px] overflow-hidden border border-white/5 flex flex-col md:flex-row h-full">
                        <div className="relative w-full md:w-1/2 h-80 md:h-auto overflow-hidden group">
                            <div className="absolute inset-0 flex">
                                <div className="relative w-1/2 h-full overflow-hidden">
                                    <img src={Legacy} alt="Legacy UI" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80" />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="text-[10px] font-bold bg-black/60 backdrop-blur-md px-2 py-1 rounded text-gray-400 uppercase tracking-widest border border-white/10">Legacy UI</span>
                                    </div>
                                </div>
                                <div className="relative w-1/2 h-full overflow-hidden">
                                    <img src={Jevxo} alt="Jevxo Revamp" className="absolute inset-0 w-full h-full object-cover" />
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className="text-[10px] font-bold bg-[#2E7BFF] px-2 py-1 rounded text-white uppercase tracking-widest shadow-lg shadow-blue-500/20">Jevxo Revamp</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 left-1/2 w-[2px] bg-[#2E7BFF] z-10 flex items-center justify-center">
                                <div className="w-8 h-8 bg-[#2E7BFF] rounded-full flex flex-col items-center justify-center shadow-[0_0_15px_rgba(46,123,255,0.5)] cursor-ew-resize hover:scale-110 transition-transform">
                                    <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-white mb-0.5"></div>
                                    <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-white"></div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                            <div>
                                <span className="text-[#E9B66F] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block">Fintech • Case Study</span>
                                <h3 className="text-3xl font-bold mb-6">LuxePay Revolution</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    A complete digital overhaul of a high-net-worth payment processor, resulting in a 40% reduction in churn...
                                </p>
                            </div>
                            <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/5">
                                <div className="flex gap-4 opacity-50">
                                    <div className="w-6 h-6 rounded flex items-center justify-center text-[10px]">JS</div>
                                    <div className="group/icon relative">
                                        <Square3Stack3DIcon className="w-5 h-5 text-gray-400 group-hover/icon:text-[#2E7BFF] transition-colors" />
                                    </div>
                                    <div className="group/icon relative">
                                        <ShareIcon className="w-5 h-5 text-gray-400 group-hover/icon:text-[#2E7BFF] transition-colors" />
                                    </div>                               </div>
                                <button className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                                    <ArrowTopRightOnSquareIcon className="w-5 h-5 text-gray-400" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Projects */}
                    {projects.map((project, index) => (
                        <div key={index} className="bg-[#151B28] rounded-[32px] overflow-hidden border border-white/5 group hover:border-[#2E7BFF]/30 transition-all">
                            {/* FIXED: Using img tag instead of trying to render the variable directly */}
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-8">
                                <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>
                                <div className="flex gap-4 opacity-40">
                                    <div className="group/icon relative">
                                        <ChartBarIcon className="w-5 h-5 text-gray-400 group-hover/icon:text-[#2E7BFF] transition-colors" />
                                        {/* Optional: Add a tiny tooltip or label if needed */}
                                    </div>
                                    <div className="group/icon relative">
                                        <CommandLineIcon className="w-5 h-5 text-gray-400 group-hover/icon:text-[#2E7BFF] transition-colors" />
                                    </div>
                                    <div className="group/icon relative">
                                        <CloudIcon className="w-5 h-5 text-gray-400 group-hover/icon:text-[#2E7BFF] transition-colors" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurShowcase;