import shape from '../assets/Shape.png'

const Hero = () => {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center px-4 md:px-12 lg:px-24 overflow-hidden">

            {/* Change items-center to items-start or adjust padding to align with H1 */}
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">

                {/* Left Side: Content */}
                <div className="flex flex-col space-y-8 py-10">
                    <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-transparent bg-clip-text bg-[linear-gradient(98.62deg,#2E7BFF_2.7%,#6CC5B7_89.07%,#2E7BFF_89.07%)]">
                        Stop Building Sites, <br />
                        Start Building <br />
                        Empires.
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
                        Transform your vision into a digital empire with cutting-edge technology,
                        stunning design, and data-driven strategies.
                    </p>

                    <button className="w-fit px-8 py-3 bg-[#E9B66F] hover:bg-[#D99A4D] text-black font-bold rounded-xl transition-all shadow-lg hover:shadow-[#E9B66F]/20">
                        See Jevxo
                    </button>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-3 gap-4 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-full max-w-md mt-8">
                        <div className="text-center border-r border-white/10">
                            <p className="text-2xl font-bold text-blue-400">500+</p>
                            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Projects</p>
                        </div>
                        <div className="text-center border-r border-white/10">
                            <p className="text-2xl font-bold text-blue-400">98%</p>
                            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Satisfaction</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-blue-400">15x</p>
                            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Avg ROI</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Shape Alignment */}
                <div className="relative flex justify-center items-center lg:justify-end lg:items-start h-full min-h-[400px]">
                    {/* Radial Glow Effect */}
                    <div className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600/28 rounded-full blur-[120px] -z-10"></div>

                    <div className="relative z-20 w-full max-w-[500px] lg:max-w-none flex justify-center lg:justify-end">
                        <img 
                            className='w-full h-auto max-h-[500px] lg:max-h-[650px] object-contain drop-shadow-[0_0_30px_rgba(46,123,255,0.2)]' 
                            src={shape} 
                            alt="shape" 
                        />
                    </div>
                </div>
            </div>

            {/* Background stars */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        </section>
    );
};

export default Hero;