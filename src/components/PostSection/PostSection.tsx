import React from 'react';
import Section from '../common/Section/Section';
import PostListItem from '../PostListItem/PostListItem';
import styles from './PostSection.module.scss';

const PostSection = () => {
  return (
    <Section title={'작성 중인 글'}>
      <div className={styles.tabBox}>
        <div className={styles.tabItem}>전체</div>
        <div className={styles.tabItem}>요약 훈련</div>
        <div className={styles.tabItem}>상상 훈련</div>
      </div>
      <div className={styles.postsBox}>
        <PostListItem
          type={'summary'}
          label={'요약 훈련'}
          count={1000}
          level={2}
          content={
            '블록체인과 암호화폐는 양날의 검과 같다. 이러한 기술의 발전이 ...'
          }
        />
        <PostListItem
          type={'imagination'}
          label={'상상 훈련'}
          tags={['키워드', '키워드']}
          content={
            '어느날, 작은 마을에 있는 약국에서 일이 벌어졌습니다. 그 약국에서 ...'
          }
        />
      </div>
    </Section>
  );
};

export default PostSection;
