import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Styles/FirstNavBar.css'

export default function AddCart() {
  return (
    <div className='cart'>
         <FontAwesomeIcon icon={faShoppingCart} />
         &nbsp;
         <span>Cart</span>
    </div>
  )
}
