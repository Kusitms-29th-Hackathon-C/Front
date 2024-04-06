import React from 'react';
import styles from './WriteImagination.module.scss';
import { WriteCharacter } from '../../assets/images';
import Button from '../../components/common/button/Button';

const WriteImagination = () => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>상상력 글쓰기</div>
      <WriteCharacter />
      <div className={styles.btnContainer}>
        <Button type={'0'} width={119} height={45} content={'임시저장'} />
        <Button type={'100'} width={119} height={45} content={'저장하기'} />
      </div>
      <textarea className={styles.text} />
    </div>
  );
};

export default WriteImagination;
