import React from 'react';
import './Styles/FirstProductRow.css';
import image1 from './images/first-row-1.jpg';
import image2 from './images/first-row-2.jpg';
import image31 from './images/first-row-3-1.jpg';
import image32 from './images/first-row-3-2.jpg';
import image33 from './images/first-row-3-3.jpg';
import image34 from './images/first-row-3-4.jpg';
import image4 from './images/first-row-4.jpg';

export default function FirstProductRow() {
  return (
    <div className="training-section">
        <div className="t1">

          <div><h1>Bluetooth Calling Smartwatch starts at ₹1,999 </h1></div>
          <div className="item"><img src={image1} className="itemimage" alt="" srcset="" ></img></div>
          <div className="caption"><a href="#">Shop Now</a></div>

        </div>
        <div className="t2">

          <div><h1>Up to 70% off | Clearance store</h1> </div>
          <div className="item"><img src={image2} className=" diffitemimage" alt="" srcset="" ></img></div>
          <div className="caption"><a href="#">See more</a></div>

        </div>
        {/* <div className="t3">

          <div><h1>Amazon pay | Book travel tickets</h1> </div>
          <div className="item"><img src={image3} className="itemimage" alt="" srcset="" ></img></div>
          <div className="caption"><a href="#"> See all offers</a>
          <button>Add to Cart</button>
          </div>

        </div> */}
        <div class="t3">
  <h1>Amazon pay | Book travel tickets</h1>
  <div className="grid-container">
    <div className="grid-item">
      <img className="inside" src={image31} alt="image1"></img>
      <p className="inside-caption">Get up to 10% off* on flight tickets</p>
    </div>
    <div className="grid-item">
      <img className="inside" src={image32} alt="image2"></img>
      <p className="inside-caption">Zero gateway fees on trains</p>
    </div>
    <div className="grid-item">
      <img className="inside" src={image33} alt="image3"></img>
      <p className="inside-caption">Guaranteed rewards on bus tickets</p>
    </div>
    <div className="grid-item">
      <img className="inside" src={image34} alt="image4" ></img>
      <p className="inside-caption">Products for your travel needs</p>
    </div>
  </div>
</div>


        <div className="t4">

          <div className='head-div'><h1>Sign in for your best experience</h1> </div>
          <div className="item"><img src={image4} className="itemimage" alt="" srcset="" ></img></div>
          <img src=""></img>

        </div>

    </div>
  )
}
