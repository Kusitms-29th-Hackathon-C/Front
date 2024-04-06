import React from 'react';
import styles from './Home.module.scss';
import CustomCalendar from '../../components/calendar/CustomCalendar';
import Label from '../../components/common/label/Label';
import Section from '../../components/common/Section/Section';
import PostListItem from '../../components/PostListItem/PostListItem';

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <Section title={'작성중인 글'}>
          <PostListItem
            type={'summary'}
            count={1000}
            level={2}
            content={'글 요약을하고 있어요 글 요약이에요 글 요약 ...'}
          />
        </Section>
      </div>
    </>
  );
};

export default Home;
