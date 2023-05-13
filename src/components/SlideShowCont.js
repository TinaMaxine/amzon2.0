import React, { useState,useEffect } from 'react';
import image1 from './images/shak.jpg';
import image2 from './images/oneplus-slide.jpg';
import image5 from './images/amazon-fashion.jpg';
import image4 from './images/bookbaz.jpg';
import image3 from './images/echodot.jpg'
import './Styles/SlideShowCont.css';

export default function SlideShowCont() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveSlideIndex((prevIndex) =>
      prevIndex === 0 ? 4 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveSlideIndex((prevIndex) =>
      prevIndex === 4 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    // Auto-slide every 4 seconds
    const intervalId = setInterval(handleNextClick, 4000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [activeSlideIndex]);

  return (
    <body className="cont">
    <div className="slideshow-container">
      <div className="mySlides fade" style={{ display: activeSlideIndex === 0 ? 'block' : 'none' }}>
        <img className="slide-images" src={image1} alt="slide1" />
        <div class="img-fade"></div>
      </div>

      <div className="mySlides fade" style={{ display: activeSlideIndex === 1 ? 'block' : 'none' }}>
        <img className="slide-images" src={image2} alt="slide2" />
        <div class="img-fade"></div>
      </div>

      <div className="mySlides fade" style={{ display: activeSlideIndex === 2 ? 'block' : 'none' }}>
        <img className="slide-images" src={image3} alt="slide3" />
        <div class="img-fade"></div>
      </div>

      <div className="mySlides fade" style={{ display: activeSlideIndex === 3 ? 'block' : 'none' }}>
        <img className="slide-images" src={image4} alt="slide4" />
        <div class="img-fade"></div>
      </div>

      <div className="mySlides fade" style={{ display: activeSlideIndex === 4 ? 'block' : 'none' }}>
        <img className="slide-images" src={image5} alt="slide5" />
        <div class="img-fade"></div>
      </div>

      <div className="prev" onClick={handlePrevClick}>
        &#10094;
      </div>
      <div className="next" onClick={handleNextClick}>
        &#10095;
      </div>
    </div>
    </body>
  );
}
