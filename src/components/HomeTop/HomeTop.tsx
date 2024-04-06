import React from 'react';
import styles from './HomeTop.module.scss';
import HomeTopItem from './HomeTopItem';

interface DummyType {
  [name: string]: [content: string];
}

const HomeTop = () => {
  const Dummy: DummyType[] = [
    {
      밍밍: [
        '동전을 떨어뜨렸을 뿐인데... 이게 무슨 일이지? 내 동전을 주웠다는 누군가가 전화를 ...',
      ],
    },
    {
      똑파민: [
        '감기약을 너무 많이 먹었나 봐요. 너무 피곤한데 계속해서 떠오르는 생각이 하필이면 ...',
      ],
    },
    {
      열정이: [
        '지독한 독감에 걸려버렸다. 버티다 못해 병원에 갔는데 감기약을 처방 해주지 않고 ...',
      ],
    },
    {
      글림이: [
        '한국조폐공사 공고문이 떴다. 이제 더이상 대한민국은 동전을 사용하지 않는다고 한다 ...',
      ],
    },
    {
      해피민: [
        '급하게 비누가 필요하다. 하지만 주변에 비누를 살 수 있는 곳은 오직 러쉬 강남점 ...',
      ],
    },
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
