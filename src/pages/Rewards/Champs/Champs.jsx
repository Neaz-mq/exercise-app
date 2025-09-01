const achievements = [
    {
        icon: "/rating.png",
        title: "First Stretch",
        status: "Unlocked",
        description: "Complete your first stretch",
        unlocked: true,
    },
    {
        icon: "/award.png",
        title: "7-Day Streak",
        status: "Unlocked",
        description: "Log 7 days in a row",
        unlocked: true,
    },
    {
        icon: "/badge-sheriff.png",
        title: "Consistency Champ",
        status: "Unlocked",
        description: "Stretch 20 days in a month",
        unlocked: true,
    },
    {
        icon: "/first-award.png",
        title: "Flexibility Guru",
        status: "Locked",
        description: "Reach 2500 total points",
        unlocked: false,
    },
    {
        icon: "/rating.png",
        title: "First Stretch",
        status: "Locked",
        description: "Complete your first stretch",
        unlocked: false,
    },
    {
        icon: "/badge-sheriff.png",
        title: "Consistency Champ",
        status: "Locked",
        description: "Complete your first stretch",
        unlocked: false,
    },
];

const Champs = () => {
    return (
        <div className="flex justify-center items-start p-4">
            <div className="2xl:max-w-6xl xl:max-w-5xl lg:max-w-4xl md:max-w-3xl sm:max-w-2xl w-full mt-24">
                <h1 className="text-3xl  text-zinc-600 mb-8">Rewards & Badges</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className={`flex items-start p-6 rounded-2xl shadow-sm transition-all duration-300
                                ${achievement.unlocked
                                    ? "bg-white border border-green-200 hover:shadow-lg"
                                    : "bg-white border border-gray-200 hover:shadow-lg"
                                }`}
                        >
                            <div
                                className="relative flex items-center justify-center h-14 w-14 rounded-full mr-4"
                            >
                                {/* Outer Ellipse (faded background) */}
                                <div
                                    className={`absolute inset-0 rounded-full ${
                                        achievement.unlocked ? "bg-[#BFDD9C]" : "bg-gray-300"
                                    } opacity-60`}
                                ></div>
                                {/* Inner Circle */}
                                <div
                                    className={`relative flex items-center justify-center h-10 w-10 rounded-full ${
                                        achievement.unlocked ? "bg-[#BFDD9C]" : "bg-gray-300"
                                    }`}
                                >
                                    <img
                                        src={achievement.icon}
                                        alt={`Icon ${index}`}
                                        className="h-4 w-4"
                                    />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-lg  text-zinc-700">{achievement.title}</h2>
                                <p
                                    className={`text-sm  mt-1
                                        ${achievement.unlocked
                                            ? "text-[#7DC33B]"
                                            : "text-zinc-600"
                                        }`}
                                >
                                    {achievement.status}
                                </p>
                                <p className="text-sm text-zinc-600 mt-1">{achievement.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Champs;
