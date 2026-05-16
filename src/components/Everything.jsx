import {
    UserGroupIcon,
    CalendarIcon,
    DocumentTextIcon,
    ChartBarIcon,
    BookOpenIcon,
    ClockIcon
} from '@heroicons/react/24/outline'; // Using Heroicons to match the visual style

const Everything = () => {
    const features = [
        {
            title: "Student Management",
            description: "Track attendance, grades, and progress",
            icon: <UserGroupIcon className="w-6 h-6 text-blue-400" />
        },
        {
            title: "Schedule Planning",
            description: "Track attendance, grades, and progress",
            icon: <CalendarIcon className="w-6 h-6 text-blue-400" />
        },
        {
            title: "Report Cards",
            description: "Digital report card generation",
            icon: <DocumentTextIcon className="w-6 h-6 text-blue-400" />
        },
        {
            title: "Analytics",
            description: "Performance insights and trends",
            icon: <ChartBarIcon className="w-6 h-6 text-blue-400" />
        },
        {
            title: "Course Management",
            description: "Curriculum and syllabus tracking",
            icon: <BookOpenIcon className="w-6 h-6 text-blue-400" />
        },
        {
            title: "Attendance Tracking",
            description: "Real-time attendance system",
            icon: <ClockIcon className="w-6 h-6 text-blue-400" />
        }
    ];

    return (
        <section className="bg-[#0B0F17] py-24 px-4 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-[linear-gradient(98.62deg,#2E7BFF_2.7%,#6CC5B7_89.07%)]">
                        Everything You Need
                    </h2>
                    <p className="text-gray-400 mt-4 text-lg">
                        Affordable plans that scale with your institution
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-[#151B28]/40 border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(46,123,255,0.05)]"
                        >
                            {/* Icon Container */}
                            <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 group-hover:bg-blue-500/10 transition-colors">
                                {feature.icon}
                            </div>

                            {/* Text Content */}
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Everything;