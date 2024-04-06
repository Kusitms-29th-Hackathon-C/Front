import React from 'react';
import styles from './Footer.module.scss';
import { Logo } from '../../../assets/images';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <Logo />
        <div>
          Copyright © 2024 Ttokpaming ltd.<br></br>All Righrts Reserved
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div>INFORMATION</div>
        <div className={styles.line} />
        <div>NOTICE</div>
        <div className={styles.line} />
        <div>FAQ</div>
        <div className={styles.line} />
        <div>AGREEMENT</div>
        <div className={styles.line} />
        <div>PRIVACY POLICY</div>
      </div>
    </div>
  );
};

export default Footer;
