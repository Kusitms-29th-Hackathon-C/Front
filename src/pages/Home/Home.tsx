import React from 'react';
import styles from './Home.module.scss';
import PostSection from '../../components/PostSection/PostSection';
import Attendance from '../../components/attendance/Attendance';

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <Attendance week={3} day={3} />
        <PostSection />
      </div>
    </>
  );
};

export default Home;
