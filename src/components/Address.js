import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Styles/FirstNavBar.css'

export default function Address() {
    return (
      <div className="icon-part">
        <a href="#">
        <div className="iconAndDelivery">
          <div className="icon">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
          &nbsp;&nbsp;
          <div className="delivery">
            <div id="g">Greetings!</div>
            <div id="c">Choose your address</div>
          </div>
        </div>
      </a>
      </div>
    );
  }
