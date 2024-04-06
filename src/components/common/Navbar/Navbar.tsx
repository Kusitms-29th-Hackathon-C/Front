import React from 'react';
import styles from './Navbar.module.scss';
import logo from '../../../assets/images/Logo.svg';
import line from '../../../assets/images/ProfileLine.svg';
import avatar from '../../../assets/images/Avatar.svg';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rightWrapper}>
        <img src={logo} className={styles.logo} />
        <div className={styles.menuContainer}>
          <div className={styles.menuItems}>홈</div>
          <div className={styles.menuItems}>글 요약</div>
          <div className={styles.menuItems}>상상력</div>
        </div>
      </div>
      <div className={styles.profileWrapper}>
        <div className={styles.nameWrapper}>
          <span className={styles.name}>밍그리</span>님
        </div>
        <img src={line} />
        <img src={avatar} />
      </div>
    </div>
  );
};

export default Navbar;
