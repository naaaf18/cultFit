import React from 'react';

const Header = () => {
  return (
    <header className="w-full p-4 bg-transparent absolute top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="flex items-center space-x-2">
          <img src="/logo.jpg" alt="Logo" className="w-10 h-10" /> 
          <h1 className="text-2xl font-bold text-white "> The Cloud 09</h1>
        </div>

        <nav>
          <ul className="flex space-x-8 text-white text-lg">
            <li>
              <a href="#trips" className="hover:text-blue-300">Trips</a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-blue-300">Gallery</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-300">About Us</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-300">Contact Us</a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center space-x-6 text-white">
          <div className="cursor-pointer hover:text-blue-300 text-lg">🛒</div>

          <div className="cursor-pointer hover:text-blue-300 text-lg">☁️</div>

          <div className="flex items-center space-x-2">
            <div className="cursor-pointer hover:text-blue-300 text-lg">📍</div>
            <span className="text-sm text-white">Mumbai</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


