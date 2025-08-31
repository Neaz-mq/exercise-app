import React, { useState } from 'react';

const Programs = () => {
  const [activeFilter, setActiveFilter] = useState('Head / Neck');
  const [activeLevel, setActiveLevel] = useState('Beginner');
  const [dailyPlan, setDailyPlan] = useState(true);

  const programs = [
    { title: 'Neck Tilt Stretch', category: 'Head / Neck', level: 'Beginner', duration: '3 min', description: 'Relieve tightness with a gentle' },
    { title: 'Neck Tilt Stretch', category: 'Head / Neck', level: 'Beginner', duration: '3 min', description: 'Relieve tightness with a gentle' },
    { title: 'Neck Tilt Stretch', category: 'Head / Neck', level: 'Beginner', duration: '3 min', description: 'Relieve tightness with a gentle' },
    { title: 'Neck Tilt Stretch', category: 'Head / Neck', level: 'Beginner', duration: '3 min', description: 'Relieve tightness with a gentle' },
    { title: 'Neck Tilt Stretch', category: 'Head / Neck', level: 'Beginner', duration: '3 min', description: 'Relieve tightness with a gentle' },
    { title: 'Neck Tilt Stretch', category: 'Head / Neck', level: 'Beginner', duration: '3 min', description: 'Relieve tightness with a gentle' },
    { title: 'Neck Tilt Stretch', category: 'Head / Neck', level: 'Beginner', duration: '3 min', description: 'Relieve tightness with a gentle' },
    { title: 'Neck Tilt Stretch', category: 'Head / Neck', level: 'Beginner', duration: '3 min', description: 'Relieve tightness with a gentle' },
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleLevelClick = (level) => {
    setActiveLevel(level);
  };

  const categories = [
    'Head / Neck',
  ];

  const levels = [
    'Beginner',
  ];

  const getFilteredCardsByTitle = (title) => {
    return programs.filter(card => card.category === title);
  }

  const sections = ['Head / Neck', 'Back'];

const ProgramCard = ({ program }) => (
  <div className="relative bg-white rounded-2xl border border-gray-200 shadow-md w-full max-w-[240px] mx-auto overflow-hidden">
    
    {/* Top green section with overlapping image */}
    <div className="bg-[#ebf5e0] h-32 flex justify-center items-center rounded-t-2xl relative z-0">
      <img
        src="https://res.cloudinary.com/dxohwanal/image/upload/v1756553712/freepik--character-2--inject-57_tkidqy.png"
        alt="Stretch visual"
        className="w-[90px] h-auto absolute -bottom-6 z-10"
      />
    </div>

    {/* Card Content */}
    <div className="pt-4 px-4 pb-4 text-center relative z-20 bg-white">
      <h3 className="text-sm font-semibold text-gray-800 mb-1">{program.title}</h3>

      <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-500 mb-2">
        <span className="bg-gray-100 px-2 py-0.5 rounded-full">{program.category}</span>
        <span className="bg-gray-100 px-2 py-0.5 rounded-full">{program.level}</span>
        <span className="bg-gray-100 px-2 py-0.5 rounded-full">{program.duration}</span>
      </div>

      <p className="text-sm text-gray-600 mb-4">{program.description}</p>

      <div className="flex justify-between gap-2">
        <button className="flex-1 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition">
          ▶ View
        </button>
        <button className="flex-1 py-1 bg-[#7DC33B] text-white text-sm rounded-full hover:bg-green-600 transition">
          Remove
        </button>
      </div>
    </div>
  </div>
);




  const ProgramSection = ({ title }) => (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl  text-gray-900">{title}</h2>
        <a href="#" className="text-sm text-green-600 font-semibold hover:text-green-700">
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {getFilteredCardsByTitle(title).map((program, index) => (
          <ProgramCard key={index} program={program} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-[#F6F6F6] mt-16 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 py-20 sm:px-6 lg:px-8  ">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 p-6 bg-white rounded-2xl shadow-lg border border-gray-200 lg:sticky lg:top-8 self-start min-h-screen">
          <h2 className="text-xl mb-6">Filter by</h2>

          <div className="mb-6">
            <h3 className="text-md text-gray-700 mb-2">Body Area</h3>
            {categories.map((category) => (
              <div
                key={category}
                className={`flex justify-between items-center p-3 mb-2 rounded-lg cursor-pointer ${
                  activeFilter === category ? 'bg-[#ebf5e0] text-gray-500 shadow' : 'hover:bg-gray-100'
                }`}
                onClick={() => handleFilterClick(category)}
              >
                <span className="text-sm font-medium">{category}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <h3 className="text-md text-gray-700 mb-2">Level</h3>
            {levels.map((level) => (
              <div
                key={level}
                className={`flex justify-between items-center p-3 mb-2 rounded-lg cursor-pointer ${
                  activeLevel === level ? 'bg-[#ebf5e0] text-gray-500 shadow' : 'hover:bg-gray-100'
                }`}
                onClick={() => handleLevelClick(level)}
              >
                <span className="text-sm font-medium">{level}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <h3 className="text-md font-medium text-gray-700 mb-2">Optional</h3>
            <label className="flex items-center text-sm text-gray-700 mb-2 cursor-pointer">
              <input type="checkbox" className="form-checkbox text-green-500 rounded-md focus:ring-green-500" />
              <span className="ml-2">Include only video supported stretches</span>
            </label>
            <label className="flex items-center text-sm text-gray-700 mb-2 cursor-pointer">
              <input type="checkbox" className="form-checkbox text-green-500 rounded-md focus:ring-green-500" />
              <span className="ml-2">Favorites only</span>
            </label>
          </div>

          <button className="w-full py-3 bg-[#7DC33B] text-white font-medium rounded-xl shadow-lg hover:bg-green-600 transition duration-300">
            Apply Filters
          </button>
        </aside>

        {/* Main Content */}
        <main className="w-full">
          <div className="flex justify-between mb-6 bg-gray-200 rounded-full p-1">
            <button
              className={`flex-1 py-3 text-center rounded-full text-sm font-semibold ${
                dailyPlan ? 'bg-[#7DC33B] text-white shadow-md' : 'text-gray-600'
              }`}
              onClick={() => setDailyPlan(true)}
            >
              Daily Plan
            </button>
            <button
              className={`flex-1 py-2 text-center rounded-full text-sm font-semibold ${
                !dailyPlan ? 'bg-[#7DC33B] text-white shadow-md' : 'text-gray-600'
              }`}
              onClick={() => setDailyPlan(false)}
            >
              Favorite
            </button>
          </div>

          {sections.map((section, index) => (
            <ProgramSection key={index} title={section} />
          ))}
        </main>
      </div>
    
    </div>
  );
};

export default Programs;
