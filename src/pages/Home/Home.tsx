import React from 'react';
import styles from './Home.module.scss';
import CustomCalendar from '../../components/calendar/CustomCalendar';
import Label from '../../components/common/label/Label';

const Home = () => {
  return (
    <>
      <div className={styles.container}>home</div>
      <CustomCalendar />
    </>
  );
};

export default Home;
