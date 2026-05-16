import { useState } from 'react';

const Flexible = () => {
    const [students, setStudents] = useState(750);
    const [isYearly, setIsYearly] = useState(false);

    // Dynamic calculations based on the design's logic
    const basePricePerStudent = 1.665;
    const monthlyCost = Math.round(students * basePricePerStudent);
    const annualSavings = Math.round((monthlyCost * 12) * 0.20); // 20% savings as indicated in toggle

    return (
        <section className="relative w-full py-24 px-4 md:px-12 lg:px-24 bg-[#0B0F17] flex flex-col items-center overflow-hidden">

            {/* Background Decorative Circuit Elements (Left & Right) */}
            <div className="absolute top-40 left-0 w-24 h-64 border-r border-t border-white/10 opacity-40 hidden lg:block">
                <div className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full -mr-1"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-blue-500 rounded-full -mr-1"></div>
            </div>
            <div className="absolute top-40 right-0 w-24 h-64 border-l border-t border-white/10 opacity-40 hidden lg:block">
                <div className="absolute top-0 left-0 w-2 h-2 bg-blue-500 rounded-full -ml-1"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-500 rounded-full -ml-1"></div>
            </div>

            {/* Header Section */}
            <div className="text-center mb-16 z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-[linear-gradient(98.62deg,#2E7BFF_2.7%,#6CC5B7_89.07%)]">
                    Flexible Pricing for Modern Schools
                </h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
                    Scale your institution with our high-performance management platform.
                    Use the calculator below to find your perfect fit.
                </p>
            </div>

            {/* Main Estimator Card */}
            <div className="max-w-5xl w-full bg-[#151B28]/60 backdrop-blur-xl border border-white/5 rounded-[40px] p-8 md:p-12 shadow-2xl z-10">

                {/* Card Header & Toggle */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Interactive Savings Estimator</h3>
                        <p className="text-gray-500 text-sm">Real-time projection based on your student enrollment.</p>
                    </div>

                    {/* Toggle Switch */}
                    <div className="bg-[#0B0F17] p-1 rounded-xl flex items-center border border-white/5">
                        <button
                            onClick={() => setIsYearly(false)}
                            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${!isYearly ? 'bg-[#2E7BFF] text-white shadow-lg shadow-blue-500/20' : 'text-gray-500'}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${isYearly ? 'bg-[#2E7BFF] text-white shadow-lg shadow-blue-500/20' : 'text-gray-500'}`}
                        >
                            Yearly (Save 20%)
                        </button>
                    </div>
                </div>

                {/* Slider Control */}
                <div className="mb-16">
                    <div className="flex justify-between items-center mb-8">
                        <p className="text-gray-300 font-medium">How many students do you have?</p>
                        <p className="text-3xl font-bold text-[#2E7BFF]">{students.toLocaleString()} <span className="text-sm text-gray-500 uppercase tracking-widest font-normal">Students</span></p>
                    </div>

                    <input
                        type="range"
                        min="100"
                        max="10000"
                        step="50"
                        value={students}
                        onChange={(e) => setStudents(Number(e.target.value))}
                        className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#2E7BFF]"
                    />
                    <div className="flex justify-between text-[10px] text-gray-600 mt-4 uppercase tracking-widest">
                        <span>100</span>
                        <span>2.5k</span>
                        <span>5k</span>
                        <span>7.5k</span>
                        <span>10k+</span>
                    </div>
                </div>

                {/* Pricing Result Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Monthly Cost Card */}
                    <div className="bg-[#1A2231] p-8 rounded-3xl border border-white/5 flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-gray-400 mb-2">
                            <span className="text-xs uppercase tracking-widest font-semibold">Estimated Monthly Cost</span>
                        </div>
                        <p className="text-5xl font-bold text-[#2E7BFF]">${monthlyCost.toLocaleString()}</p>
                        <p className="text-[10px] text-blue-400 uppercase tracking-widest font-bold mt-2">Electric Blue Scalability</p>
                    </div>

                    {/* Annual Savings Card */}
                    <div className="bg-[#1A2231] p-8 rounded-3xl border border-white/5 flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-gray-400 mb-2">
                            <span className="text-xs uppercase tracking-widest font-semibold">Estimated Annual Savings</span>
                        </div>
                        <p className="text-5xl font-bold text-[#E9B66F]">Save ${annualSavings.toLocaleString()}</p>
                        <p className="text-[10px] text-[#E9B66F] uppercase tracking-widest font-bold mt-2">With Premium Support Access</p>
                    </div>
                </div>
            </div>

            {/* Background Decorative Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        </section>
    );
};

export default Flexible;