import React from 'react';
import './places.css';

function Places() {
  return (
    <div>
      <div className="page4 pb-0">
        <h1 className='text-white'>The best of our packages</h1>
        <div className="elem">
          <img src="/nepal1.jpg" alt="Im" />
          <div className="text-div">
            <h1>NEPAL</h1>
            <h1>NEPAL</h1>
          </div>
          <img src="/nepal.jpg" alt="Im" />
        </div>
        <div className="elem">
          <img src="/box1.jpg" alt="Im" />
          <div className="text-div">
            <h1>AGRA</h1>
            <h1>AGRA</h1>
          </div>
          <img src="/box2.jpg" alt="Im" />
        </div>
        <div className="elem">
          <img src="/udaipur.jpg" alt="Im" />
          <div className="text-div">
            <h1>UDAIPUR</h1>
            <h1>UDAIPUR</h1>
          </div>
          <img src="/udaipur1.jpg" alt="Im" />
        </div>
      </div>
      <div className="page5 h-10 text-black"></div>
    </div>
  );
}

export default Places;
