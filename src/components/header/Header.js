import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import toteIcon from '../../assets/svg/Tote.svg';
import userIcon from '../../assets/svg/User.svg';

export default function Header() {
  return (
    <div className="header">
      <div className="header-container container">
        <div className="header-logo">
          <Link to="/products">
            Food<span className="orange-text">tuck</span>
          </Link>
        </div>
        <div className="header-tools">
          <div className="header-profile">
            <Link to="/">
              <img src={userIcon} alt="User" width={'24px'} height="24px" />
            </Link>
          </div>
          <div className="header-cart">
            <Link to="/cart">
              <img src={toteIcon} alt="Tote" width={'24px'} height="24px" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
