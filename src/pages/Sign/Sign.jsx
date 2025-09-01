const SignIn = () => {
  return (
    <div className="min-h-screen bg-[#F6F6F6] flex flex-col items-center justify-center p-6 font-inter">
      {/* Container for the main content */}
      <div className="w-full max-w-sm flex flex-col items-center">
        {/* Image from the provided URL */}
        <div className="mb-8">
          <img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1756719928/Group_21_h3svr8.png"
            alt="Person doing a side stretch"
            className="w-full h-auto rounded-xl"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x300/e5e7eb/6b7280?text=Image+Not+Found"; }}
          />
        </div>

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 tracking-wide leading-tight">
            EXERCISE
            <br />
            LIBRARY
          </h1>
        </div>

        {/* Buttons */}
        <div className="w-full space-y-4">
          <button className="w-full py-4 text-white text-lg font-semibold bg-lime-500 hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-50 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Log in
          </button>
          <button className="w-full py-4 text-lime-500 text-lg font-semibold bg-white border-2 border-lime-500 hover:bg-lime-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-50 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
