import React from 'react';
import styles from './Home.module.scss';
import CustomCalendar from '../../components/calendar/CustomCalendar';
import LargeButton from '../../components/common/button/LargeButton';

const Home = () => {
  return (
    <>
      <div className={styles.container}>home</div>
      <CustomCalendar />
      <LargeButton type='0' />
    </>
  );
};

export default Home;
