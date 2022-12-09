import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

import toteIcon from '../../assets/svg/Tote.svg';
import userIcon from '../../assets/svg/User.svg';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container + ' container'}>
        <div className={styles.logo}>
          <Link to="/products">
            Food<span className="orange-text">tuck</span>
          </Link>
        </div>
        <div className={styles.tools}>
          <div>
            <Link to="/">
              <img src={userIcon} alt="User" width={'24px'} height="24px" />
            </Link>
          </div>
          <div>
            <Link to="/cart">
              <img src={toteIcon} alt="Tote" width={'24px'} height="24px" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
