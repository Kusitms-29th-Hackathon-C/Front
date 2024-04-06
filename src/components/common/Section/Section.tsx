import React from 'react';
import styles from './Section.module.scss';

interface SectionProps {
  title: string | undefined;
  children: React.ReactNode;
}
const Section = (props: SectionProps) => {
  const { title, children } = props;
  return (
    <div className={styles.section}>
      <div className={styles.title}>{title}</div>
      <div className={styles.contentBox}>{children}</div>
    </div>
  );
};

export default Section;
