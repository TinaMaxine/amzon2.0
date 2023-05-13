import React from 'react';
import './Styles/ThirdProductRow.css';
import image1 from './images/3-row-1.jpg';
import image2 from './images/3-row-2.jpg';
import image3 from './images/3-row-3.jpg';
import image4 from './images/3-row-4.jpg';
import image5 from './images/3-row-5.jpg';
import image6 from './images/3-row-6.jpg';
import image7 from './images/3-row-7.jpg';
import image8 from './images/3-row-8.jpg';
import image9 from './images/3-row-9.jpg';
import image10 from './images/3-row-10.jpg';
import image11 from './images/3-row-11.jpg';
import image12 from './images/3-row-12.jpg';

export default function ThirdProductRow() {
    return (
      <div className="slider-container">
        <h1>Today's Deals</h1>
        <div className="slider-items">
          <div className="slider-item">
            <div className="image-container"><img src={image1} alt="item1" /></div>
          </div>
          <div className="slider-item">
            <div className="image-container"><img src={image2} alt="item2" /></div>
          </div>
          <div className="slider-item">
            <div className="image-container"><img src={image3} alt="item3" /></div>
          </div>
          <div className="slider-item">
            <div className="image-container"><img src={image4} alt="item4" /></div>
          </div>
          <div className="slider-item">
            <div className="image-container"><img src={image5} alt="item5" /></div>
          </div>
          <div className="slider-item">
            <div className="image-container"><img src={image6} alt="item6" /></div>
          </div>
          <div className="slider-item">
            <div className="image-container"><img src={image7} alt="item7" /></div>
          </div>
          <div className="slider-item">
            <div className="image-container"><img src={image8} alt="item8" /></div>
          </div>
          <div className="slider-item">
            <div className="image-container"><img src={image9} alt="item9" /></div>
          </div>
          <div className="slider-item">
            <div className="image-container"><img src={image10} alt="item10" /></div>
          </div>
          <div className="slider-item">
            <div className="image-container"><img src={image11} alt="item11" /></div>
          </div>
          <div className="slider-item">
            <div className="image-container"><img src={image12} alt="item12" /></div>
          </div>
        </div>
      </div>
    );
  }
  
