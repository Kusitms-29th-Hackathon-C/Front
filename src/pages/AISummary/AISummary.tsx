import React from 'react';
import styles from './AISummary.module.scss';
import Footer from '../../components/common/footer/Footer';
import { Header, SummaryOthers } from '../../assets/images';
import Button from '../../components/common/button/Button';
import { useLocation } from 'react-router-dom';

const AISummary = () => {
  const { state } = useLocation();
  console.log('ddd', state);
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.title}>내가 요약한 글</div>
          <Button type='0' width={119} height={45} content={'수정하기'} />
        </div>

        <div className={styles.mySummary}>{state?.my}</div>
        <div className={styles.title}>AI Summary</div>
        <div className={styles.aiSummary}>{state?.ai}</div>
        <div className={styles.title}>다른 사람 요약 구경하기</div>
        <SummaryOthers />
      </div>
      <Footer />
    </>
  );
};

export default AISummary;
