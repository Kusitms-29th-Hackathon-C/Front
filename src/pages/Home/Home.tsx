import React from 'react';
import styles from './Home.module.scss';
import CustomCalendar from '../../components/calendar/CustomCalendar';
import Label from '../../components/common/label/Label';
import Section from '../../components/common/Section/Section';
import PostListItem from '../../components/PostListItem/PostListItem';
import PostSection from '../../components/PostSection/PostSection';
import HomeSummary from '../../components/homeSummary/HomeSummary';

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <PostSection />
        <HomeSummary />
      </div>
    </>
  );
};

export default Home;
