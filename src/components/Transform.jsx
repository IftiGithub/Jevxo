import heroImage from "../assets/Video Animation.png"; // Replace with your actual image path

const Transform = () => {
    const stats = [
        { label: "School", value: "11k" },
        { label: "Students", value: "500k" },
        { label: "Average Roll", value: "100%" },
    ];

    return (
        <section className="relative w-full pt-20 pb-24 px-6 md:px-12 lg:px-24 bg-[#0B0F17] overflow-hidden">

            {/* Background Decorative Lines (Circuit Style) */}
            <div className="absolute top-40 left-0 w-32 h-64 border-l border-b border-white/5 opacity-50 hidden lg:block">
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-gray-600 rounded-sm -mr-[3px]"></div>
            </div>
            <div className="absolute bottom-20 right-0 w-24 h-48 border-r border-t border-white/5 opacity-50 hidden lg:block">
                <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-gray-600 rounded-sm -ml-[3px]"></div>
            </div>

            {/* Content Header */}
            <div className="max-w-5xl mx-auto text-center z-10 relative">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                    <span className="text-[#2E7BFF]">Transform education</span>
                    <span className="text-white"> with </span>
                    <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#2E7BFF,#6CC5B7)]">
                        Jevxo Edu
                    </span>
                </h1>

                <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                    Complete school management solution that saves time, reduces costs, and improves educational outcomes.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                    <button className="px-10 py-4 bg-[#E9B66F] text-[#0B0F17] font-bold rounded-xl hover:bg-[#d4a35f] transition-all shadow-lg shadow-[#E9B66F]/10">
                        Start free Trial
                    </button>
                    <button className="px-10 py-4 bg-[#2E7BFF]/10 text-white border border-[#2E7BFF]/30 font-bold rounded-xl hover:bg-[#2E7BFF]/20 transition-all backdrop-blur-sm">
                        Watch video
                    </button>
                </div>

                {/* Hero Image Card */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#2E7BFF]/20 to-transparent rounded-[32px] blur-xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>
                    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#151B28]">
                        <img
                            src={heroImage}
                            alt="Modern Office"
                            className="w-full h-auto object-cover opacity-90"
                        />
                    </div>
                </div>

                {/* Metrics Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 border-t border-white/5 pt-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <span className="text-4xl md:text-5xl font-bold text-[#2E7BFF] mb-2">
                                {stat.value}
                            </span>
                            <span className="text-gray-400 text-lg font-medium">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Gradient Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-[#2E7BFF]/5 to-transparent pointer-events-none"></div>
        </section>
    );
};

export default Transform;