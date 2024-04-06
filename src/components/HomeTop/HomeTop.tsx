import React from 'react';
import styles from './HomeTop.module.scss';
import HomeTopItem from './HomeTopItem';

interface DummyType {
  [name: string]: [content: string];
}

const HomeTop = () => {
  const Dummy: DummyType[] = [
    { 이름이름1: ['내용내용1'] },
    { 이름이름2: ['내용내용2'] },
    { 이름이름3: ['내용내용3'] },
    { 이름이름4: ['내용내용4'] },
    { 이름이름5: ['내용내용5'] },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.label}>오늘의 상상력 Top 5</div>
      <div className={styles.box}>
        {Dummy.map((item, index) => {
          const key = Object.keys(item)[0]; // 객체의 첫 번째 키를 가져옵니다.
          const content = item[key][0]; // 키를 사용하여 내용을 가져옵니다.
          return (
            <HomeTopItem
              key={index}
              index={index}
              name={key}
              content={content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomeTop;
