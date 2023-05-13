import React from 'react';
import './Styles/FirstNavBar.css';
import indiaflag from './images/flag-India.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';


export default function FlagAndLanguage() {
    return (
      <div className="flagAndLanguage">
        <div className='flag'>
          <img className='flag-image' src={indiaflag} width="25px" height="15px"></img>
        </div>
          
        <div>EN</div>
        <div className="language">
          <FontAwesomeIcon icon={faCaretDown} className="caret-down" />
        </div>
      </div>
    );
  }
  
  
  
  
  
  