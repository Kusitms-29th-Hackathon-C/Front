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
          <div className={styles.myTitle}>동전을 떨어뜨렸을 뿐인데...</div>
          <div className={styles.middle}>
            <div className={styles.avatar}>
              <Avatar />
              밍그리
            </div>
            <Like />
          </div>
          <Stroke />
          <div className={styles.myContent}>
            동전을 떨어뜨렸을 뿐인데... 이게 무슨 일이지? 내 동전을 주웠다는
            누군가가 전화를 걸어왔다. 발신자 표시 제한으로 전화를 건 그 너머에는
            "안녕하세요?" 낯선 여성 목소리가 들려왔다. "네, 여보세요? 누구세요?"
            나는 궁금증을 감출 수 없었다. "죄송합니다, 제가 방금 전에 동전을
            주웠어요. 그러다가 제가 주웠던 동전의 소유자를 알아내려고 전화를
            걸어봤는데, 아마도 당신일 것 같아요." 그녀는 조심스럽게 말했다.
            "어떻게 제 동전을 주웠다는 걸 알아요?" 나는 놀란 채 물었다. "그
            동전에는 비누와 감기약이 들어있었거든요. 제가 그 동전을 주웠을 때,
            비누와 감기약이 떨어져 나왔어요. 그래서... 그렇게 알게 되었어요."
            그녀의 목소리에는 미안함이 묻어났다. 나는 잠깐 고요했다. 그런데
            어떻게 내 동전에 비누와 감기약이 들어가 있을까? 마음속으로는 어색한
            웃음이 떠올랐다. "그러면 그 동전은 제 것이 맞아요. 어디서 주웠는지
            궁금하네요." 나는 호기심에 사로잡혔다.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Result;
