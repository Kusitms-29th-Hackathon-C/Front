import React from 'react';
import styles from './AISummary.module.scss';
import Footer from '../../components/common/footer/Footer';
import { Header, SummaryOthers } from '../../assets/images';
import Button from '../../components/common/button/Button';

const AISummary = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.title}>내가 요약한 글</div>
          <Button type='0' width={119} height={45} content={'수정하기'} />
        </div>

        <div className={styles.mySummary}>
          '블록체인 기술은 탈중앙화된 거래 기록 시스템으로 암호화폐를 포함한
          디지털 거래를 혁신적으로 관리합니다. 이를 통해 중개자 없는 거래,
          투명성, 보안, 및 비용 절감이 가능해졌습니다. 그러나 확장성과 규제 등의
          도전에도 불구하고, 블록체인과 암호화폐는 금융과 기술 분야에서 계속해서
          혁신을 이끌어내고 있습니다.'
        </div>
        <div className={styles.title}>AI Summary</div>
        <div className={styles.aiSummary}>
          블록체인 기술은 중앙화된 중개자 없이 거래를 기록하고 관리하는 혁신적인
          시스템으로, 이는 암호화폐를 비롯한 디지털 거래를 혁신적으로
          변화시켰습니다. 이러한 기술은 거래의 투명성과 보안을 보장하면서도 중간
          단계를 제거하여 비용을 절감하고 신속한 거래를 가능케 합니다. 그러나
          확장성 문제와 규제적인 도전에 직면하고 있지만, 이러한 어려움을
          극복하면서 블록체인과 암호화폐는 금융과 기술 분야에서 지속적으로
          혁신을 주도하고 있습니다.
        </div>
        <div className={styles.title}>다른 사람 요약 구경하기</div>
        <SummaryOthers />
      </div>
      <Footer />
    </>
  );
};

export default AISummary;
