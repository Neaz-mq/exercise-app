import React from 'react';

const Testing = () => {
  const tests = [
    {
      title: 'Neck Rotation Test',
      button: 'View Instructions',
      isPrimary: false,
    },
    {
      title: 'Shoulder Abduction Test',
      button: 'View Instructions',
      isPrimary: false,
    },
    {
      title: 'Forward Bend Test',
      button: 'Begin Test',
      isPrimary: true,
    },
  ];

  return (
    <div className='flex justify-center items-start bg-[#F6F6F6] mt-16 min-h-screen p-4 '>
      <div className='max-w-6xl w-full mt-24'>
        {/* Header */}
        <div className='bg-[#f4faed] p-10 rounded-lg shadow-sm mb-10'>
          <div className='flex items-start'>
            {/* Icon Image */}
            <img
              src='/functional.png'
              alt='Functional Testing Icon'
              className='h-10 w-10 mr-6 mt-2'
            />

            {/* Text + Button in vertical stack */}
            <div>
              <h2 className='text-3xl font-bold text-gray-800'>
                Functional Mobility Testing
              </h2>
              <p className='text-gray-600 text-sm mt-2'>
                Assess your range of motion and identify any limitations.
              </p>
              <div className='mt-14'>
                <button className='bg-[#7DC33B] text-white font-semibold py-2 px-6 rounded-md hover:bg-green-700 transition duration-300'>
                  Start Test
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {tests.map((test, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col'
            >
              {/* Image wrapper */}
              <div className='bg-[#f6ffed] flex items-center justify-center h-48 '>
                <img
                  src='https://res.cloudinary.com/dxohwanal/image/upload/v1756553712/freepik--character-2--inject-57_tkidqy.png'
                  alt={test.title}
                  className='h-full object-contain mt-20'
                />
              </div>

              {/* Content */}
              <div className='-translate-y-10 p-6 text-center flex flex-col  flex-grow bg-white z-20'>
                <h3 className='text-lg font-semibold text-gray-800 mb-4'>
                  {test.title}
                </h3>
                <button
                  className={` mt-6 w-full font-semibold py-2 px-4 rounded-lg transition duration-300 ${
                    test.isPrimary
                      ? 'bg-[#7DC33B] text-white shadow-md hover:bg-green-700'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {test.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testing;