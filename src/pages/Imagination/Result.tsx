import React from 'react';
import styles from './Result.module.scss';
import Label from '../../components/common/label/Label';
import { Avatar, Like, Stroke } from '../../assets/images';
import Footer from '../../components/common/footer/Footer';

const Result = () => {
  const tags = ['#동전', '#비누', '#감기약'];
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>상상력 글쓰기</div>
        <div className={styles.writeBox}>
          <div className={styles.tagList}>
            {tags.map((item) => (
              <Label type='10' content={item} paddingH={4} paddingV={16} />
            ))}
          </div>
          <div className={styles.myTitle}>안녕하세요 제목입니다.</div>
          <div className={styles.middle}>
            <div className={styles.avatar}>
              <Avatar />
              밍그리
            </div>
            <Like />
          </div>
          <Stroke />
          <div className={styles.myContent}>
            어느 날, 작은 마을에 있는 약국에서 일이 벌어졌습니다. 그 약국은
            평범한 날이었는데도 어떤 이유 때문인지 모르게 동전, 비누, 그리고
            감기약이 모두 떨어져 나가 버렸습니다. 마을 사람들은 이런 이상한
            사건을 듣고는 놀라워했지만, 무엇보다 이 모든 물건들이 왜 한꺼번에
            사라졌는지 이해할 수가 없었습니다. 마을의 경찰관인 마이크는 이
            사건을 조사하기 위해 바로 액션을 취했습니다. 그는 마을 사람들에게
            질문을 던졌지만, 누구도 무슨 일이 벌어졌는지 알지 못했습니다.
            마이크는 약국으로 가서 사건 현장을 조사하기로 결정했습니다. 약국
            안은 조용했고, 물건들이 흩어져 있었습니다. 마이크는 먼저 동전을 찾기
            시작했습니다. 바닥에 두루 떨어져 있는 동전들을 주워가면서, 갑자기
            그의 발 밑에서 하나의 비누 조각이 미끄러져 나오더니 굴러가기
            시작했습니다. "어라? 이게 뭐지?" 마이크가 비누를 주워 들었습니다. 그
            순간, 비누를 꽉 쥔 그의 손에서는 어느새 감기약이 튀어나왔습니다!
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Result;
