import React from "react";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

// Reusable Card Wrapper
const Card = ({ children }) => (
  <div className="bg-white rounded-3xl shadow-md p-6 flex flex-col justify-between h-full">
    {children}
  </div>
);

const DashboardCards = () => {
  return (
    <div className="bg-[#F6F6F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: Points & Leaderboard */}
          <Card>
            <div className="flex flex-col flex-grow">
              <h3 className="text-2xl text-gray-800">Points & Leaderboard</h3>
              <div className="mt-4 w-full bg-[#ebf5e0] rounded-lg p-2 flex items-center space-x-3">
                <div>
                  <img
                    src="/star.png"
                    alt="Star Icon"
                    className="h-16 w-16 mt-2"
                  />
                </div>
                <p className="text-gray-600 font-medium">
                  You've earned <br />{" "}
                  <span className="text-gray-800">120 points</span> this week
                </p>
              </div>
              <div className="mt-6 w-full text-left">
                <h4 className="text-lg font-semibold text-gray-800">
                  Leaderboard
                </h4>
                <div className="mt-4 w-full bg-[#ebf5e0] rounded-lg p-4 space-x-3">
                  <ul className="space-y-4">
                    {[
                      { name: "Alex", points: "580 pt" },
                      { name: "Maria", points: "460 pt" },
                      { name: "James", points: "360 pt" },
                    ].map((user, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="bg-[#BFDD9C] rounded-full p-2">
                            <User className="h-4 w-4 text-[#7DC33B]" />
                          </div>
                          <span className="text-gray-800 font-medium">
                            {user.name}
                          </span>
                        </div>
                        <span className="text-gray-600">{user.points}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <Link
              to="/leaderboard"
              className="mt-6 w-full px-6 py-3 text-center text-gray-600 font-semibold rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300"
            >
              View Full Leaderboard
            </Link>
          </Card>

          {/* Card 2: Today's Stretch (Badges) */}
          <Card>
            <div className="flex flex-col flex-grow">
              <h3 className="text-2xl text-gray-800">Today's Stretch</h3>
              <div className="mt-4 w-full bg-[#ebf5e0] rounded-lg p-6">
                <img
                  src="https://res.cloudinary.com/dxohwanal/image/upload/v1756553712/freepik--character-2--inject-57_tkidqy.png"
                  alt="Hamstring stretch"
                  className="w-full h-32 object-contain rounded-lg"
                />
              </div>
              <p className="text-base text-gray-700 mt-4">
                Relieve tightness with a gentle hamstring stretch routine.
              </p>
              <div className="flex items-center justify-center space-x-4 mt-6">
                {[
                  { icon: "/rating.png", active: true },
                  { icon: "/award.png", active: false },
                  { icon: "/badge-sheriff.png", active: true },
                  { icon: "/first-award.png", active: false },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`relative flex items-center justify-center h-14 w-14 rounded-full`}
                  >
                    {/* Outer Ellipse (faded background) */}
                    <div
                      className={`absolute inset-0 rounded-full ${
                        item.active ? "bg-[#BFDD9C]" : "bg-gray-300"
                      } opacity-60`}
                    ></div>

                    {/* Inner Circle */}
                    <div
                      className={`relative flex items-center justify-center h-10 w-10 rounded-full ${
                        item.active ? "bg-[#BFDD9C]" : "bg-gray-300"
                      }`}
                    >
                      <img
                        src={item.icon}
                        alt={`Icon ${idx}`}
                        className="h-4 w-4"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="mt-6 w-full px-6 py-3 text-center text-gray-600 font-semibold rounded-full border bg-[#cfebae] border-gray-300 hover:bg-gray-100 transition duration-300">
              View All Badges
            </button>
          </Card>

          {/* Card 3: Start Stretch */}
          <Card>
            <div className="flex flex-col flex-grow">
              <h3 className="text-2xl text-gray-800">Today's Stretch</h3>
              <div className="mt-4 w-full bg-[#ebf5e0] rounded-lg p-6 flex flex-col items-center">
                <div className="w-full flex space-x-2">
                  <div>
                    <h4 className="font-normal text-xl text-gray-800">
                      Today's Stretch: Hamstring Flow
                    </h4>
                    <p className="text-base text-gray-600 mt-6">
                      Relieve tightness with a gentle hamstring stretch routine.
                    </p>
                  </div>
                  <img
                    src="https://res.cloudinary.com/dxohwanal/image/upload/v1756553712/freepik--character-2--inject-57_tkidqy.png"
                    alt="Hamstring stretch"
                    className="w-1/2 h-36 object-contain rounded-lg"
                  />
                </div>
                <div className="flex space-x-2 mt-8 w-full">
                  <span className="text-xs text-gray-500 font-medium bg-[#BFDD9C] px-3 py-1 rounded-full">
                    3 min
                  </span>
                  <span className="text-xs text-gray-500 font-medium bg-[#BFDD9C] px-3 py-1 rounded-full">
                    Beginner
                  </span>
                  <span className="text-xs text-gray-500 font-medium bg-[#BFDD9C] px-3 py-1 rounded-full">
                    Hip
                  </span>
                </div>
              </div>
            </div>
            <button className="mt-6 w-full px-6 py-3 bg-[#7DC33B] text-white font-semibold rounded-full hover:bg-green-700 transition duration-300 ease-in-out shadow-lg">
              Start Stretch
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
