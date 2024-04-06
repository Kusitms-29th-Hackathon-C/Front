import React from 'react';
import styles from './Home.module.scss';
import PostSection from '../../components/PostSection/PostSection';
import HomeSummary from '../../components/homeSummary/HomeSummary';
import Footer from '../../components/common/footer/Footer';
import Attendance from '../../components/attendance/Attendance';

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <Attendance week={3} day={3} />
        <PostSection />
        <HomeSummary />
      </div>
      <Footer />
    </>
  );
};

export default Home;
