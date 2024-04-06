import React from 'react';
import styles from './HomeTopItem.module.scss';
import { Avatar } from '../../assets/images';

interface ItemType {
  name: string;
  content: string;
  index: number;
}

const HomeTopItem = ({ index, name, content }: ItemType) => {
  return (
    <div className={styles.container}>
      <div className={styles.rank}>{index + 1}</div>
      <div className={styles.subContainer}>
        <div className={styles.profile}>
          <Avatar />
          <div className={styles.name}>{name}</div>
        </div>
        <div className={styles.content}>{content}</div>
      </div>
      <div className={styles.divider}></div>
    </div>
  );
};

export default HomeTopItem;
