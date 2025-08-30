const Banner = () => {
  return (
    <div className="bg-[#F6F6F6] md:mt-10 mt-16">
      <div className="max-w-7xl mx-auto"> 
        <div className="px-4 sm:px-6 lg:px-8 p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg flex flex-col md:flex-row items-center justify-between">
          
          {/* Left text */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
              Good Afternoon, Alex!
            </h2>
            <p className="text-md sm:text-lg text-gray-600 mt-2">
              Time for your daily stretch and a quick recharge!
            </p>
            <button className="mt-6 px-6 py-3 bg-[#7DC33B] text-white font-semibold rounded-full hover:bg-green-700 transition duration-300 ease-in-out shadow-lg">
              Start Today's Session
            </button>
          </div>

          {/* Right image */}
          <div className="flex-shrink-0">
            <img
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1756550606/exercise_ol2u9k.png"
              alt="Person stretching"
              className="h-48 sm:h-56 md:h-64 lg:h-72 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
