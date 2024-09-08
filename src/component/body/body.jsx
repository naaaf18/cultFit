import React from 'react';
import './body.css'

function Body() {
  const images = [
  '/box1.jpg',
    '/box2.jpg',
    '/box3.jpg',
    '/box4.jpg',
    '/box5.jpg',
    '/box6.jpg',
    '/box7.jpg',
    '/box8.jpg',
    '/box9.jpg',
    '/box10.jpg',
  ];

  return (
    <div className="text-center row w-50%">
      <h1 className="text-white mb-4">Trending Destination</h1>    

      <div className="posters">
        {images.map((image, index) => (
          <img
            key={index}
            alt={`Poster ${index + 1}`}
            src={image}
            className="poster"
          />
        ))}
      </div>

    </div>
  );
}

export default Body;
