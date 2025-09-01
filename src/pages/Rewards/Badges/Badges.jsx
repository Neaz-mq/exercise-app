const Badges = () => {
  return (
    <div className="flex justify-center items-start bg-[#F6F6F6] min-h-screen p-4">
      <div className="2xl:max-w-6xl xl:max-w-5xl lg:max-w-4xl md:max-w-3xl sm:max-w-2xl w-full mt-24">
        <div className="bg-[#f4faed] p-8 sm:p-10 md:p-12 rounded-lg shadow-sm flex flex-col items-center">
          
          {/* Points Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center w-full text-center mb-8 gap-4 sm:gap-0">
            {/* Today's Points */}
            <div className="flex flex-col items-center flex-1 sm:border-r border-[#7DC33B] py-2 sm:py-0">
              <p className="text-sm text-gray-500 mb-1">Today's Points</p>
              <div className="flex items-center text-gray-600 text-2xl">
                <span className="text-[#7DC33B] mr-1">★</span>
                15 pts
              </div>
            </div>

            {/* This Week */}
            <div className="flex flex-col items-center flex-1 sm:border-r border-[#7DC33B] py-2 sm:py-0">
              <p className="text-sm text-gray-500 mb-1">This Week</p>
              <div className="flex items-center text-gray-600 text-2xl">
                <span className="text-[#7DC33B] mr-1">★</span>
                80 pts
              </div>
            </div>

            {/* This Month */}
            <div className="flex flex-col items-center flex-1 sm:border-r border-[#7DC33B] py-2 sm:py-0">
              <p className="text-sm text-gray-500 mb-1">This Month</p>
              <div className="flex items-center text-gray-600 text-2xl">
                <span className="text-[#7DC33B] mr-1">★</span>
                220 pts
              </div>
            </div>

            {/* Total Points */}
            <div className="flex flex-col items-center flex-1 py-2 sm:py-0">
              <p className="text-sm text-gray-500 mb-1">Total Points</p>
              <div className="flex items-center text-gray-600 text-2xl">
                <span className="text-[#7DC33B] mr-2">★</span>
                2470 pts
              </div>
            </div>
          </div>

          {/* Progress Bar Section */}
          <div className="w-full text-center">
            <h3 className="text-lg text-gray-800">Flexibility Guru</h3>

            {/* Responsive progress bar */}
            <div className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl 2xl:max-w-4xl bg-gray-200 rounded-full h-2.5 mt-4">
              <div
                className="bg-[#7DC33B] h-2.5 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>

            <p className="text-gray-500 text-base sm:text-lg mt-4">
              You're 30 points away from your next badge!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badges;
