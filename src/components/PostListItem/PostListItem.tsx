import React from 'react';
import styles from './PostListItem.module.scss';
import Label from '../common/label/Label';
import Button from '../common/button/Button';
import { ProfileLine } from '../../assets/images';

interface PostListItemProps {
  type: 'summary' | 'imagination';
  label?: string;
  count?: number;
  content: string;
  level?: number;
  tags?: string[];
}

const PostListItem = (props: PostListItemProps) => {
  const { type, label, count, content, level, tags } = props;

  return (
    <div className={styles.container}>
      <div className={styles.rightWrapper}>
        <div className={styles.topInfo}>
          <Label type={'10'} paddingH={4} paddingV={4} content={label || ''} />
          {type === 'summary' ? (
            <>
              <div className={styles.textInfo}>{count}자</div>
              <div className={styles.textInfo}>Lv.{level}</div>
            </>
          ) : (
            <div className={styles.tagList}>
              {tags?.map((item) => <div className={styles.tag}>#{item}</div>)}
            </div>
          )}
        </div>
        <div className={styles.content}>{content}</div>
      </div>
      <Button type={'100'} width={119} height={45} content={'이어쓰기'} />
    </div>
  );
};

export default PostListItem;
