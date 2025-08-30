import { User } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardCards = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1: Points & Leaderboard */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Points & Leaderboard</h3>
              
              <div className="flex items-center space-x-3 mt-4 bg-[#F8F8F8] p-4 rounded-lg">
                <div className="text-[#F6D04C]">
                  {/* Star Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">You've earned <span className="font-bold text-gray-800">120 points</span> this week</p>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-800">Leaderboard</h4>
                <ul className="mt-4 space-y-4">
                  {/* Leaderboard Item 1 */}
                  <li className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-[#BFDD9C] rounded-full p-2">
                        <User className="h-4 w-4 text-[#7DC33B]" />
                      </div>
                      <span className="text-gray-800 font-medium">Alex</span>
                    </div>
                    <span className="text-gray-600">580 pt</span>
                  </li>
                  {/* Leaderboard Item 2 */}
                  <li className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-[#BFDD9C] rounded-full p-2">
                        <User className="h-4 w-4 text-[#7DC33B]" />
                      </div>
                      <span className="text-gray-800 font-medium">Maria</span>
                    </div>
                    <span className="text-gray-600">460 pt</span>
                  </li>
                  {/* Leaderboard Item 3 */}
                  <li className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-[#BFDD9C] rounded-full p-2">
                        <User className="h-4 w-4 text-[#7DC33B]" />
                      </div>
                      <span className="text-gray-800 font-medium">James</span>
                    </div>
                    <span className="text-gray-600">360 pt</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <Link to="/leaderboard" className="mt-6 text-center text-gray-600 hover:text-green-600 font-semibold">
              View Full Leaderboard
            </Link>
          </div>

          {/* Card 2: Today's Stretch (Hamstring Flow) */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold text-gray-800">Today's Stretch</h3>
              <div className="mt-4 w-full bg-[#E5F1E5] rounded-lg p-4">
                <img
                  src="https://res.cloudinary.com/dxohwanal/image/upload/v1756553712/freepik--character-2--inject-57_tkidqy.png" 
                  alt="Hamstring stretch"
                  className="w-full lg:h-24 object-contain rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Relieve tightness with a gentle hamstring stretch routine.
              </p>
              <div className="flex space-x-4 mt-6">
                {/* Badge 1 */}
                <div className="bg-[#BFDD9C] rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star h-5 w-5 text-[#7DC33B]">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </div>
                {/* Badge 2 */}
                <div className="bg-[#BFDD9C] rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud h-5 w-5 text-[#7DC33B]">
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
                  </svg>
                </div>
                {/* Badge 3 */}
                <div className="bg-[#BFDD9C] rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-snowflake h-5 w-5 text-[#7DC33B]">
                    <path d="M8 12h8"/><path d="M12 8v8"/><path d="m8.5 8.5 1.5 1.5"/><path d="m5 10 1.5 1.5"/><path d="m8.5 15.5 1.5-1.5"/><path d="m5 14 1.5-1.5"/><path d="m15.5 8.5-1.5 1.5"/><path d="m19 10-1.5 1.5"/><path d="m15.5 15.5-1.5-1.5"/><path d="m19 14-1.5-1.5"/>
                  </svg>
                </div>
                {/* Badge 4 */}
                <div className="bg-[#E5F1E5] rounded-full p-3">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user h-5 w-5 text-[#7DC33B]">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                   </svg>
                </div>
              </div>
            </div>
            
            <button className="mt-6 w-full px-6 py-3 text-center text-gray-600 font-semibold rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300">
              View All Badges
            </button>
          </div>

          {/* Card 3: Start Stretch */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold text-gray-800">Today's Stretch</h3>
              <div className="mt-4 w-full bg-[#E5F1E5] rounded-lg p-4">
                <img
                  src="https://res.cloudinary.com/dxohwanal/image/upload/v1756553712/freepik--character-2--inject-57_tkidqy.png" 
                  alt="Hamstring stretch"
                  className="w-full h-24 object-contain rounded-lg"
                />
              </div>
              <div className="mt-4 text-left w-full">
                <h4 className="font-semibold text-lg text-gray-800">Today's Stretch: Hamstring Flow</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Relieve tightness with a gentle hamstring stretch routine.
                </p>
              </div>
              <div className="flex space-x-2 mt-4 w-full">
                <span className="text-xs text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">3 min</span>
                <span className="text-xs text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">Beginner</span>
                <span className="text-xs text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">Hip</span>
              </div>
            </div>
            
            <button className="mt-6 w-full px-6 py-3 bg-[#7DC33B] text-white font-semibold rounded-full hover:bg-green-700 transition duration-300 ease-in-out shadow-lg">
              Start Stretch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
