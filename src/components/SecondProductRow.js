import React from 'react';
import './Styles/SecondProductRow.css';
import image11 from './images/sec-row-1-1.jpg';
import image12 from './images/sec-row-1-2.jpg';
import image13 from './images/sec-row-1-3.jpg';
import image14 from './images/sec-row-1-4.jpg';
import image21 from './images/sec-row-2-1.jpg';
import image22 from './images/sec-row-2-2.jpg';
import image23 from './images/sec-row-2-3.jpg';
import image24 from './images/sec-row-2-4.jpg';
import image31 from './images/sec-row-3-1.jpg';
import image32 from './images/sec-row-3-2.jpg';
import image33 from './images/sec-row-3-3.jpg';
import image34 from './images/sec-row-3-4.jpg';
import image4 from './images/sec-row-4.jpg';

export default function SecondProductRow() {
  return (
    <div className="sec-training-section">
              <div class="sec-t1">
  <h1>Starting ₹79 | Amazon brands & more</h1>
  <div className="sec-grid-container">
    <div className="sec-grid-item">
      <img className="sec-inside" src={image11} alt="image1"></img>
      <p className="sec-inside-caption">Starting ₹169 | Choppers & more</p>
    </div>
    <div className="sec-grid-item">
      <img className="sec-inside" src={image12} alt="image2"></img>
      <p className="sec-inside-caption">Starting ₹79 | String lights  & more</p>
    </div>
    <div className="sec-grid-item">
      <img className="sec-inside" src={image13} alt="image3"></img>
      <p className="sec-inside-caption">Starting ₹239 | Jars, containers & more</p>
    </div>
    <div className="sec-grid-item">
      <img className="sec-inside" src={image14} alt="image4" ></img>
      <p className="sec-inside-caption">Starting ₹189 | Wall stickers & more</p>
    </div>
  </div>
</div>
        <div class="sec-t2">
  <h1>Up to 60% off | Styles for men & women</h1>
  <div className="sec-grid-container">
    <div className="sec-grid-item">
      <img className="sec-inside" src={image21} alt="image1"></img>
      <div className='sec-inside-div'><p className="sec-inside-caption">Clothing</p></div>
    </div>
    <div className="sec-grid-item">
      <img className="sec-inside" src={image22} alt="image2"></img>
      <div className='sec-inside-div'><p className="sec-inside-caption">Footwear</p></div>
    </div>
    <div className="sec-grid-item">
      <img className="sec-inside" src={image23} alt="image3"></img>
      <div className='sec-inside-div'><p className="sec-inside-caption">Watches</p></div>
    </div>
    <div className="sec-grid-item">
      <img className="sec-inside" src={image24} alt="image4" ></img>
      <div className='sec-inside-div'><p className="sec-inside-caption">Bags & luggage</p></div>
    </div>
  </div>
</div>
        {/* <div className="t3">

          <div><h1>Amazon pay | Book travel tickets</h1> </div>
          <div className="item"><img src={image3} className="itemimage" alt="" srcset="" ></img></div>
          <div className="caption"><a href="#"> See all offers</a>
          <button>Add to Cart</button>
          </div>

        </div> */}
        <div class="sec-t3">
  <h1>Electronics devices for home office</h1>
  <div className="sec-grid-container">
    <div className="sec-grid-item">
      <img className="sec-inside" src={image31} alt="image1"></img>
      <p className="sec-inside-caption">Smartwatches & fitness trackers</p>
    </div>
    <div className="sec-grid-item">
      <img className="sec-inside" src={image32} alt="image2"></img>
      <p className="sec-inside-caption">Tablets</p>
    </div>
    <div className="sec-grid-item">
      <img className="sec-inside" src={image33} alt="image3"></img>
      <p className="sec-inside-caption">Laptops</p>
    </div>
    <div className="sec-grid-item">
      <img className="sec-inside" src={image34} alt="image4" ></img>
      <p className="sec-inside-caption">Monitors</p>
    </div>
  </div>
</div>


        <div className="t4">

          <div className='head-div'><h1>Sign in for your best experience</h1> </div>
          <div className="item"><img src={image4} className="itemimage" alt="" srcset="" ></img></div>
          <div className="caption"><a href="#">See more</a></div>

        </div>

    </div>
  )
}
