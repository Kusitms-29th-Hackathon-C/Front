import React from 'react';
import Section from '../common/Section/Section';
import styles from './Attendance.module.scss';
import Label from '../common/label/Label';
import { PointLine } from '../../assets/images';
import dayChart from '../../assets/images/DayChart.png';

interface AttendanceProps {
  week: number;
  day: number;
}

const Attendance = ({ week, day }: AttendanceProps) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.label}>출석</div>
        <div className={styles.subContainer}>
          <div className={styles.topInfoBox}>
            <div className={styles.topInfoItem}>
              <Label
                type='100'
                content='주간연속출석'
                paddingH={4}
                paddingV={16}
              />
              <PointLine />
              <div>{week}주</div>
            </div>
            <div className={styles.topInfoItem}>
              <Label
                type='100'
                content='일간연속출석'
                paddingH={4}
                paddingV={16}
              />
              <PointLine />
              <div>{day}일</div>
            </div>
          </div>
          <img src={dayChart} width={'552px'} />
        </div>
      </div>
    </>
  );
};

export default Attendance;
