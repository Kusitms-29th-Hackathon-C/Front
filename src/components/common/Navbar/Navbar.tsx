import React from 'react';
import styles from './Navbar.module.scss';

import { Avatar, Logo, ProfileLine } from '../../../assets/images';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.rightWrapper}>
        <Logo />
        <div className={styles.menuContainer}>
          <div className={styles.menuItems} onClick={() => navigate('/')}>
            홈
          </div>
          <div
            className={styles.menuItems}
            onClick={() => navigate('/exercise')}
          >
            요약 훈련
          </div>
          <div
            className={styles.menuItems}
            onClick={() => navigate('/imagination')}
          >
            상상 훈련
          </div>
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
