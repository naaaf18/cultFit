import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 border-t border-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="flex flex-col items-start ">
          <img src="/logo.jpg" alt="Logo" className="h-24 mb-6" />
        </div>
        
        <div className="flex flex-col items-start md:items-center md:text-left">
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <p className="text-gray-400">
            At Cloud 09 Travel Community, we believe in turning every journey into a memorable adventure. 
            Our community connects passionate travelers who seek to explore the world’s hidden gems, 
            experience diverse cultures, and create lifelong friendships along the way.
          </p>
        </div>
        
        <div className="flex flex-col items-start text-gray-400 space-y-4 md:space-y-2">
          <h2 className="text-lg font-semibold ml-6">Quick Links</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
            <h3>Cloud 09 for business</h3>
  <h3>Cloud 09 franchise</h3>
  <h3>Cloud 09 partnerships</h3>
  <h3>Cloud 09 network</h3>
  <h3>T&C for business</h3>
            </div>
            <div className="space-y-2">
              <p>Partner</p>
              <p>blogs</p>
              <p>security</p>
              <p>careers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src="/playstore.png" alt="App Store" className="w-40" />
          </a>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <img src="/appstore.png" alt="Google Play" className="w-40" />
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <a href="https://www.youtube.com" aria-label="YouTube" className="text-gray-400 hover:text-white text-3xl">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://www.facebook.com" aria-label="Facebook" className="text-gray-400 hover:text-white text-3xl">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" aria-label="X" className="text-gray-400 hover:text-white text-3xl">
            <i className="fab fa-x"></i>
          </a>
          <a href="https://www.instagram.com" aria-label="Instagram" className="text-gray-400 hover:text-white text-3xl">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" aria-label="LinkedIn" className="text-gray-400 hover:text-white text-3xl">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
