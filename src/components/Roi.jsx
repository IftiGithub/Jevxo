import { useState } from 'react';

const Roi = () => {
    const [budget, setBudget] = useState(50000);
    const multiplier = 1.5; // Based on the selected "Web Development" multiplier in the image
    const projectedRoi = budget * multiplier;

    const services = [
        { name: "Web Development", multiplier: "1.5X", active: true },
        { name: "App Development", multiplier: "2X", active: false },
        { name: "Digital Marketing", multiplier: "3X", active: false },
        { name: "Branding & Design", multiplier: "1.8X", active: false },
    ];

    return (
        <section className="bg-[#0B0F17] text-white py-20 px-4 md:px-12 lg:px-24 min-h-screen flex flex-col items-center">

            {/* Header Section */}
            <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-[linear-gradient(98.62deg,#2E7BFF_2.7%,#6CC5B7_89.07%)]">
                    ROI Calculator
                </h2>
                <p className="text-gray-400 mt-4 tracking-wide">
                    Discover your potential return on investment with our services
                </p>
            </div>

            {/* Main Content Grid */}
            <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-8 items-stretch">

                {/* Left Column: Controls */}
                <div className="flex flex-col gap-6 w-full lg:w-[40%]">

                    {/* Budget Slider Card */}
                    <div className="bg-[#151B28]/60 backdrop-blur-xl border border-white/5 p-8 rounded-3xl shadow-2xl">
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-gray-400 font-semibold uppercase text-xs tracking-widest">Your Budget</span>
                            <span className="text-[#6CC5B7] font-bold text-xl">${budget.toLocaleString()}</span>
                        </div>

                        <input
                            type="range"
                            min="5000"
                            max="200000"
                            step="5000"
                            value={budget}
                            onChange={(e) => setBudget(Number(e.target.value))}
                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#2E7BFF] mb-10"
                        />

                        <div className="text-center border-t border-white/5 pt-6">
                            <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Projected ROI</p>
                            <p className="text-4xl font-bold text-[#E9B66F]">${projectedRoi.toLocaleString()}</p>
                        </div>
                    </div>

                    {/* Services Grid Card */}
                    <div className="bg-[#151B28]/60 backdrop-blur-xl border border-white/5 p-8 rounded-3xl shadow-2xl flex-1">
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                            Select Services <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                        </h3>

                        <div className="grid grid-cols-2 gap-4">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${service.active
                                            ? 'bg-[#1A2333] border-blue-500/50 shadow-[0_0_20px_rgba(46,123,255,0.1)]'
                                            : 'bg-transparent border-white/5 hover:border-white/20'
                                        }`}
                                >
                                    <p className="text-sm font-medium mb-1">{service.name}</p>
                                    <p className="text-[10px] text-blue-400 font-bold uppercase tracking-tighter">
                                        {service.multiplier} Multiplier
                                    </p>
                                </div>
                            ))}
                        </div>

                        <button className="w-full mt-6 py-2 text-[10px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors border border-dashed border-white/10 rounded-lg">
                            + More Service
                        </button>
                    </div>
                </div>

                {/* Right Column: Projection Graph */}
                <div className="bg-[#151B28]/60 backdrop-blur-xl border border-white/5 p-8 rounded-3xl shadow-2xl w-full lg:w-[60%] relative flex flex-col">
                    <h3 className="text-lg font-semibold mb-10">12-Month Projection</h3>

                    <div className="relative flex-1 flex flex-col justify-between border-l border-b border-white/10 pb-2 pl-2">

                        {/* Y-Axis Labels */}
                        <div className="absolute -left-7 inset-y-0 flex flex-col justify-between text-[10px] text-gray-600 py-2">
                            <span>$140k</span>
                            <span>$105k</span>
                            <span>$70k</span>
                            <span>$35k</span>
                            <span>$0k</span>
                        </div>

                        {/* Chart Area */}
                        <div className="relative h-64 w-full mt-4">
                            {/* The Gradient Line */}
                            <svg className="w-full h-full" viewBox="0 0 400 150">
                                <defs>
                                    <linearGradient id="chartGradient" x1="0" y1="1" x2="0" y2="0">
                                        <stop offset="0%" stopColor="#E9B66F" stopOpacity="0" />
                                        <stop offset="100%" stopColor="#E9B66F" stopOpacity="0.2" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M 0 100 Q 200 80 400 40 L 400 150 L 0 150 Z"
                                    fill="url(#chartGradient)"
                                />
                                <path
                                    d="M 0 100 Q 200 80 400 40"
                                    stroke="#E9B66F"
                                    strokeWidth="3"
                                    fill="none"
                                />
                                {/* Dynamic Data Points */}
                                <circle cx="0" cy="100" r="4" fill="#E9B66F" />
                                <circle cx="200" cy="80" r="4" fill="#E9B66F" className="opacity-50" />
                                <circle cx="400" cy="40" r="6" fill="#E9B66F" className="animate-pulse" />
                            </svg>

                            {/* Floating Projection Tag */}
                            <div className="absolute top-0 right-0 bg-[#1A2333] border border-white/10 p-3 rounded-xl text-center shadow-xl">
                                <p className="text-[#E9B66F] font-bold text-lg">${(projectedRoi).toLocaleString()}k</p>
                                <p className="text-[8px] text-gray-500 uppercase">Projected return after 12 month</p>
                            </div>
                        </div>

                        {/* X-Axis Labels */}
                        <div className="flex justify-between w-full text-[10px] text-gray-600 pt-4 px-2">
                            <span>Now</span><span>M2</span><span>M4</span><span>M6</span><span>M8</span><span>M10</span><span>M12</span>
                        </div>
                    </div>

                    {/* Legend */}
                    <div className="mt-8 flex gap-6 text-[10px] uppercase tracking-widest font-semibold">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            <span className="text-gray-400">Your Investment</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#E9B66F]"></span>
                            <span className="text-gray-400">Projected Return</span>
                        </div>
                    </div>

                    <p className="mt-auto pt-6 text-[10px] text-gray-600 italic">
                        Estimates based on client performance
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Roi;