import React from 'react';
import styles from './WriteImagination.module.scss';
import { WriteCharacter } from '../../assets/images';
import Button from '../../components/common/button/Button';
import { useNavigate } from 'react-router-dom';

const WriteImagination = () => {
  const navigate = useNavigate();

  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');

  return (
    <div className={styles.container}>
      <div className={styles.label}>상상력 글쓰기</div>
      <WriteCharacter />
      <div className={styles.btnContainer}>
        <Button type={'0'} width={119} height={45} content={'임시저장'} />
        <Button
          type={'100'}
          width={119}
          height={45}
          content={'저장하기'}
          onClick={() => navigate('/result')}
        />
      </div>

      <div className={styles.textBox}>
        <input
          className={styles.titleInput}
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='제목을 입력해주세요'
        />
        <hr />
        <textarea
          className={styles.contentInput}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='자신의 상상력을 마음껏 발휘해 보세요! 어쩌면 멋진 글이 탄생할지도 몰라요.'
        ></textarea>
      </div>
    </div>
  );
};

export default WriteImagination;
