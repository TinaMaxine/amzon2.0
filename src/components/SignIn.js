import React from 'react';
import './Styles/FirstNavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const SignIn = () => {
  return (
    <div className="sign-in">
      <a href="#" className="signin">
        <div className="hello">Hello, sign in</div>
        <div className="account">
            Accounts & Lists
            <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </a>
    </div>
  );
};

export default SignIn;
