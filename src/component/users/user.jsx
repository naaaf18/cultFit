import React from 'react';

function User() {
  return (
    <div className='mt-0 px-10'>
      <div className="flex p-12 bg-black">
        <div className="w-1/3 p-4"> 
          <h1 className="text-2xl font-semibold mb-4 text-white">OUR TEAM JOURNEY</h1>
          <p className="mb-4 text-white">For all those travellers out there</p>
          <div className="space-y-2">
            <p className="text-gray-800 hover:text-white transform hover:scale-105 transition duration-300">Adventure Awaits</p>
            <p className="text-gray-800 hover:text-white transform hover:scale-105 transition duration-300">Discover New Places</p>
            <p className="text-gray-800 hover:text-white transform hover:scale-105 transition duration-300">Join Our Community</p>
          </div>
        </div>
        
        <div className="w-2/3 flex flex-col p-4"> 
          <div className="flex-1 flex">
            <div className="w-1/3 bg-gray-600 h-1/rounded-lg mr-4 flex items-center justify-center relative">
              <img src="jammu1.jpg" alt="Explore the World" className="w-full h-full object-cover rounded-lg" />
              <h2 className="absolute text-white text-xl font-semibold top-4 left-4">Explore the World</h2>
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex-1 flex space-x-4 mb-4">
                <div className="w-1/2 bg-gray-400 h-full rounded-lg flex items-center justify-center relative">
                  <img src="udaipur.jpg" alt="Top Destinations" className="w-full h-full object-cover rounded-lg" />
                  <p className="absolute text-white font-semibold">Top Destinations</p>
                </div>
                <div className="w-1/2 bg-gray-400 h-full rounded-lg flex items-center justify-center relative">
                  <img src="box3.jpg" alt="Travel Tips" className="w-full h-full object-cover rounded-lg" />
                  <p className="absolute text-white font-semibold">Travel Tips</p>
                </div>
              </div>
              <div className="h-[250px] bg-gray-500 rounded-lg flex items-center justify-center relative">
                <img src="box4.jpg" alt="Join the Journey" className="w-full h-full object-cover rounded-lg" />
                <p className="absolute text-white font-semibold">Join the Journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
