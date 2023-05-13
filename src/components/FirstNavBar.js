import React from 'react'
import './Address'
import Address from './Address';
import SearchBox from './SearchBox';
import FlagAndLanguage from './FlagAndLanguage';
import SignIn from './SignIn';
import ReturnsOrders from './ReturnsOrders';
import AddCart from './AddCart';
import amazonlogo from './images/amazo-in-logo-no-bg.png';
import './Styles/FirstNavBar.css'

export default function FirstNavbar() {
    return (
      <nav className="first-nav">
        <a href="#">
          <img className="logo-image" src={amazonlogo} alt="logo" />
        </a>
        <Address></Address>
        <SearchBox></SearchBox>
        <FlagAndLanguage/>
        <SignIn></SignIn>
        <ReturnsOrders></ReturnsOrders>
        <AddCart></AddCart>
      </nav>
    );
  }
