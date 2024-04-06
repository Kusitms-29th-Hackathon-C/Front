import React from 'react';
import styles from './Home.module.scss';
import CustomCalendar from '../../components/calendar/CustomCalendar';
import Label from '../../components/common/label/Label';
import Section from '../../components/common/Section/Section';

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <Section title={'작성중인 글'}>
          <div>dddd</div>
        </Section>
      </div>
    </>
  );
};

export default Home;
