const bodyAreas = [
  { name: "Head / Neck", icon: "/g513.png", active: true },
  { name: "Shoulder", icon: "/g1233.png" },
  { name: "Back", icon: "/g1395.png" },
  { name: "Hip", icon: "/g179.png" },
  { name: "Knee", icon: "/g441.png" },
  { name: "Foot", icon: "/g99.png" },
  { name: "Arm", icon: "/g789.png" },
  { name: "Hand / Fingers", icon: "/g395.png" },
];

const stretches = [
  {
    title: "Standing Neck Stretch",
    level: "Beginner",
    area: "Neck",
    image:
      "https://res.cloudinary.com/dxohwanal/image/upload/v1756553712/freepik--character-2--inject-57_tkidqy.png",
  },
  {
    title: "Standing Neck Stretch",
    level: "Beginner",
    area: "Neck",
    image:
      "https://res.cloudinary.com/dxohwanal/image/upload/v1756553712/freepik--character-2--inject-57_tkidqy.png",
  },
  {
    title: "Standing Neck Stretch",
    level: "Beginner",
    area: "Neck",
    image:
      "https://res.cloudinary.com/dxohwanal/image/upload/v1756553712/freepik--character-2--inject-57_tkidqy.png",
  },
  {
    title: "Standing Neck Stretch",
    level: "Beginner",
    area: "Neck",
    image:
      "https://res.cloudinary.com/dxohwanal/image/upload/v1756553712/freepik--character-2--inject-57_tkidqy.png",
  },
  {
    title: "Standing Neck Stretch",
    level: "Beginner",
    area: "Neck",
    image:
      "https://res.cloudinary.com/dxohwanal/image/upload/v1756553712/freepik--character-2--inject-57_tkidqy.png",
  },
  {
    title: "Standing Neck Stretch",
    level: "Beginner",
    area: "Neck",
    image:
      "https://res.cloudinary.com/dxohwanal/image/upload/v1756553712/freepik--character-2--inject-57_tkidqy.png",
  },
];

const Stretches = () => {
  return (
    <div className="bg-[#F6F6F6] mt-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Select a Body Area
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Choose where you feel tight or need mobility work.
            </p>
          </div>

          {/* Body Area Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {bodyAreas.map((area, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 flex flex-col items-center justify-center border cursor-pointer transition ${
                  area.active
                    ? "bg-[#dbe9cb] border-green-500"
                    : "bg-white border-gray-300 hover:border-green-400"
                }`}
              >
                <img
                  src={area.icon}
                  alt={area.name}
                  className="h-12 w-12 object-contain mb-3"
                />
                <span className="text-gray-700 font-medium text-sm sm:text-base text-center">
                  {area.name}
                </span>
              </div>
            ))}
          </div>

          {/* Stretches Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {stretches.map((stretch, idx) => {
              const lastSpaceIndex = stretch.title.lastIndexOf(" ");
              const firstPart = stretch.title.substring(0, lastSpaceIndex);
              const secondPart = stretch.title.substring(lastSpaceIndex + 1);

              return (
                <div
                  key={idx}
                  className="flex bg-white rounded-lg shadow-sm border hover:border-green-400 transition overflow-hidden"
                >
                  {/* Left Image */}
                  <div className="bg-[#e7f0dc] p-4 flex items-center justify-center">
                    <img
                      src={stretch.image}
                      alt={stretch.title}
                      className="h-20 w-20 object-contain"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    {/* Title + Bookmark in same row */}
                    <div className="flex justify-between items-start">
                      <h4 className="text-gray-800 text-sm sm:text-lg leading-tight">
                        {firstPart}
                        <br />
                        {secondPart}
                      </h4>
                      <button className="p-2 text-gray-600 hover:text-green-600 self-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 5v14l7-7 7 7V5z"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Level + Area */}
                    <p className="text-gray-500 text-sm mt-1">
                      {stretch.level} • {stretch.area}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Button */}
          <div className="flex justify-end">
            <button className="px-6 py-2 bg-[#dbe9cb] text-gray-700 font-medium rounded-full hover:bg-[#c8e0b1] transition">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stretches;
