import { CheckCircleIcon } from '@heroicons/react/20/solid';
import hat from "../assets/Vector.png"
import house from "../assets/Vector (1).png"
import brain from "../assets/Icon.png"

const Pricing = () => {
    // Mapping string keys to the imported assets
    const iconMap = {
        hat: hat,
        house: house,
        brain: brain
    };

    const tiers = [
        {
            name: 'Essential',
            description: 'Perfect for growing schools and specialized academies.',
            features: ['Up to 250 students', 'Basic Academic Records', 'Attendance Tracking'],
            buttonText: 'Start Free',
            highlighted: false,
            icon: 'hat'
        },
        {
            name: 'Pro Management',
            description: 'Advanced tools for data-driven educational institutions.',
            features: ['Up to 1,000 students', 'Full Finance & Analytics', 'Parent/Teacher Portal', 'Automated Scheduling'],
            buttonText: 'Upgrade to Pro',
            highlighted: true,
            icon: 'house'
        },
        {
            name: 'Ultimate',
            description: 'Custom ecosystem for large districts and universities.',
            features: ['Unlimited Students', 'API Access & Webhooks', 'Dedicated Account Manager'],
            buttonText: 'Contact Sales',
            highlighted: false,
            icon: 'brain'
        },
    ];

    return (
        <section className="bg-[#0B0F17] py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {tiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-3xl flex flex-col h-full transition-all duration-300 ${tier.highlighted
                                ? 'bg-[#151B28] border-2 border-[#E9B66F] scale-105 z-10 shadow-[0_0_40px_rgba(233,182,111,0.1)]'
                                : 'bg-[#151B28]/60 border border-white/5 hover:border-white/10'
                                }`}
                        >
                            {tier.highlighted && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E9B66F] h-1.5 w-24 rounded-full" />
                            )}

                            {/* Dynamic Icon Implementation */}
                            <div className="mb-6 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                <img
                                    src={iconMap[tier.icon]}
                                    alt={tier.name}
                                    className={`w-5 h-5 object-contain ${tier.highlighted ? 'brightness-125' : ''}`}
                                />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                            <p className="text-gray-400 text-sm mb-8 leading-relaxed">{tier.description}</p>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {tier.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-5 h-5 text-blue-400 shrink-0" />
                                        <span className="text-gray-300 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 ${tier.highlighted
                                    ? 'bg-[#E9B66F] text-[#0B0F17] hover:bg-[#d4a35f]'
                                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                                    }`}
                            >
                                {tier.buttonText}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-32 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
                        Ready to modernize your campus?
                    </h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <button className="bg-[#E9B66F] text-[#0B0F17] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d4a35f] transition-all">
                            Get Free Personalised Demo
                        </button>
                        <p className="text-gray-500 text-sm max-w-xs text-left">
                            Join over 4,500+ modern schools already using EduFlow to transform education.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;