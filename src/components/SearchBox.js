import React from 'react';
import './Styles/FirstNavBar.css';

export default function SearchBox() {
    return (
      <div className="search-box">
        <select className="select-s same-size">
          <option selected="selected">
            <button className='same-size'>All</button>
          </option>
          <option>Alexa Skills</option>
          <option >Amazon Devices</option>
          <option >Amazon Fashion</option>
          <option >Amazon Pharmacy</option>
          <option >Appliances</option>
          <option >Apps &amp; Games</option>
          <option >Baby</option>
          <option >Beauty</option>
          <option >Books</option>
          <option >Car &amp; Motorbike</option>
        </select>
        <input className='input' placeholder="Search Amazon.in" type="text" />
        <button className="search-button">
          <i className="fa fa-search"></i>
        </button>
      </div>
    );
  }
