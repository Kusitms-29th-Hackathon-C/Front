import React from 'react';
import styles from './Home.module.scss';
import CustomCalendar from '../../components/calendar/CustomCalendar';
import Label from '../../components/common/label/Label';
import Section from '../../components/common/Section/Section';
import PostListItem from '../../components/PostListItem/PostListItem';
import PostSection from '../../components/PostSection/PostSection';
import HomeSummary from '../../components/homeSummary/HomeSummary';
import Footer from '../../components/common/footer/Footer';
import HomeTop from '../../components/HomeTop/HomeTop';
import Attendance from '../../components/attendance/Attendance';

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <PostSection />
          <HomeSummary />
        </div>
        <div className={styles.subContainer}>
          <HomeTop />
          <Attendance week={3} day={3} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
