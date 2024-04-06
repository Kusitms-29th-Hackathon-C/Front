import React from 'react';
import styles from './Navbar.module.scss';

import { Avatar, Logo, ProfileLine } from '../../../assets/images';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rightWrapper}>
        <Logo />
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
        <ProfileLine />
        <Avatar />
      </div>
    </div>
  );
};

export default Navbar;
