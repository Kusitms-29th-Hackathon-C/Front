import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  type: string;
  width: number;
  height: number;
}

const Button = ({ type, width, height }: ButtonProps) => {
  // size는 319, 111, 79
  const dynamicPaddingStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <button
      style={dynamicPaddingStyle}
      className={`${styles.btn}
      ${type === '100' ? styles.btnGreen100 : type === '10' ? styles.btnGreen10 : styles.btnWhite}`}
    >
      Button
    </button>
  );
};

export default Button;
