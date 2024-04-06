import React from 'react';
import styles from './HomeSummary.module.scss';

interface DummyType {
  [key: string]: {
    [key: string]: boolean;
  };
}

const HomeSummary = () => {
  const Dummy: DummyType = {
    '인문 ・ 예술': {
      '0': true,
      '1': false,
      '2': false,
    },
    '사회 ・ 문화': {
      '0': false,
      '1': false,
      '2': false,
    },
    '과학 ・ 기술': {
      '0': false,
      '1': false,
      '2': false,
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.label}>오늘의 요약 현황</div>
      <div className={styles.box}>
        {Object.keys(Dummy).map((category, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.title}>{category}</div>
            <div className={styles.level}>
              {Object.keys(Dummy[category]).map((key) => (
                <div
                  key={key}
                  className={`${styles.default} ${Dummy[category][key] ? styles.complete : styles.yet}`}
                >
                  {Dummy[category][key] ? '완료' : `Lv ${parseInt(key) + 1}`}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSummary;
