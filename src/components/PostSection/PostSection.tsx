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
          label={'글 요약'}
          count={1000}
          level={2}
          content={'글 요약을하고 있어요 글 요약이에요 글 요약 ...'}
        />
        <PostListItem
          type={'imagination'}
          label={'상상력'}
          tags={['키워드', '키워드']}
          content={'글 요약을하고 있어요 글 요약이에요 글 요약 ...'}
        />
      </div>
    </Section>
  );
};

export default PostSection;
