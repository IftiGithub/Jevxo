import growth from "../assets/growth.png";

const Growth = () => {
    return (
        <section className="relative w-full py-24 px-4 flex flex-col items-center justify-center overflow-hidden">
            
            {/* Main Flex Container */}
            <div className="max-w-7xl w-full flex flex-col items-center text-center space-y-4 z-10">

                {/* 1. Title Section */}
                <div className="mb-2">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-[linear-gradient(98.62deg,#2E7BFF_2.7%,#6CC5B7_89.07%,#2E7BFF_89.07%)]">
                        The Jevxo Growth Engine
                    </h2>
                </div>

                {/* 2. Subtext */}
                <p className="text-gray-400 text-sm md:text-lg uppercase tracking-[0.3em] font-medium max-w-3xl">
                    A Unified Ecosystem where Strategy, Design, and technology work as one.
                </p>

                {/* 3. Enlarged Central Image & Orbital Pattern */}
                <div className="relative w-full max-w-6xl mt-20 flex justify-center items-center min-h-[600px] lg:min-h-[800px]">
                    
                    {/* --- ENLARGED CIRCULAR DASHED PATTERN --- */}
                    
                    {/* Inner Dashed Circle - Increased Size */}
                    <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] border border-dashed border-blue-500/30 rounded-full animate-[spin_60s_linear_infinite]"></div>
                    
                    {/* Middle Dashed Circle - Increased Size */}
                    <div className="absolute w-[450px] h-[450px] md:w-[650px] md:h-[650px] border border-dashed border-blue-400/20 rounded-full animate-[spin_100s_linear_infinite_reverse]"></div>
                    
                    {/* Large Outer Decorative Circle */}
                    <div className="absolute w-[550px] h-[550px] md:w-[850px] md:h-[850px] border border-dashed border-blue-300/10 rounded-full"></div>
                    
                    {/* Radiating Spokes - Extended Length */}
                    {[...Array(8)].map((_, i) => (
                        <div 
                            key={i}
                            className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent w-[700px] md:w-[1000px]"
                            style={{ transform: `rotate(${i * 45}deg)` }}
                        ></div>
                    ))}

                    {/* Enhanced Radial Glow */}
                    <div className="absolute w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-blue-600/15 rounded-full blur-[150px] -z-10"></div>
                    
                    {/* --- THE CORE IMAGE (Enlarged) --- */}
                    <img
                        src={growth}
                        alt="Jevxo Growth Engine"
                        className="relative z-20 w-[250px] md:w-[450px] lg:w-[550px] h-auto object-contain drop-shadow-[0_0_80px_rgba(46,123,255,0.5)] transition-transform duration-700 hover:scale-105"
                    />
                </div>
            </div>

            {/* Background Stardust */}
            <div className="absolute inset-0 pointer-events-none opacity-25 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        </section>
    );
};

export default Growth;