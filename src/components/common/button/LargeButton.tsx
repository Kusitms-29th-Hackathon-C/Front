import React from 'react';
import styles from './LargeButton.module.scss';

interface ButtonProps {
  type: string;
}

const LargeButton = ({ type }: ButtonProps) => {
  return (
    <button
      className={`${styles.btn}
      ${type === '100' ? styles.btnGreen100 : type === '10' ? styles.btnGreen10 : styles.btnWhite}`}
    >
      Button
    </button>
  );
};

export default LargeButton;
