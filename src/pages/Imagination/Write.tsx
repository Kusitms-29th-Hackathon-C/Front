import React, { useEffect, useState } from 'react';
import styles from './Write.module.scss';
import Button from '../../components/common/button/Button';
import { Header } from '../../assets/images';
import { useLocation, useNavigate } from 'react-router-dom';
import { postSummary } from '../../apis/userSummaryApi';

interface Data {
  summary: string;
  others: { nickname: string; content: string }[];
}

const Write = () => {
  const navigate = useNavigate();

  const [data, setData] = useState<Data>();
  const [content, setContent] = useState('');
  const { state } = useLocation();

  const handleSumary = () => {
    try {
      postSummary(1, state.id, content).then((res) => {
        console.log('gg', res);
        setData(res);
        navigate('/aisummary', {
          state: { ai: res.result.summary, my: content },
        });
      });
    } catch (error) {
      console.error('Error fetching writings:', error);
    }
  };

  console.log(data);

  return (
    <>
      <div className={styles.top}>
        <div className={styles.numberBox}>2</div>
        <div className={styles.category}>사회•문화</div>
        <div className={styles.title}>경제 성장 모형</div>
      </div>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <div className={styles.leftContainer}>
            우리는 종종 뉴스에서 '경제 성장'이라는 말을 듣곤 합니다. 그런데, 이
            '경제 성장'이라는 것이 무엇인지, 어떻게 이루어지는 것인지 정확하게
            이해하고 있는지는 확신하기 어려울 것입니다. 이번에는 경제 성장이
            어떻게 일어나는지 이해하도록 도와주는 '경제 성장 모형'에 대해서
            알아볼까요? 경제 성장 모형은 이름에서도 알 수 있듯, '경제 성장'이
            어떻게 이루어지는지 설명하는 모형입니다. 모형이란 종이나 플라스틱
            등으로 만든 작은 물건을 떠올리면 되는데, 여기서는 시각적인 물체가
            아니라 경제 성장의 원리를 설명하기 위한 '개념적' 모형을 말합니다.
            여러분이 가장 먼저 이해해야 할 사실은 경제 성장이란 바로 '시간이
            지남에 따라서 사람들이 생산하는 물건이나 서비스의 총량이 증가하는
            것'이라는 것입니다. 가령, 우리나라가 1년 동안 만드는 자동차의 수가
            100대에서 200대로 늘었다면, 우리나라의 경제는 성장했다고 말할 수
            있습니다. 그렇다면 왜 경제 성장이 일어날까요? 이를 설명하기 위해
            가장 많이 사용되는 경제 성장 모형은 바로 '솔로 모형'이라는 것입니다.
            이 모형은 노벨경제학상을 받은 로버트 솔로가 만든 모형으로, 경제
            성장의 결정 요인을 '자본', '노동', 그리고 '기술'로 설명합니다.
            '자본'은 자동차 공장에서 사용하는 기계나 로봇 등을 의미하며, 더 많은
            자본이 있을수록 더 많은 물건을 생산할 수 있습니다. 따라서 자본이
            많아지면 경제 성장이 일어납니다. '노동'은 사람들이 일하는 시간을
            의미하며, 더 많이 일하면 물론 더 많은 물건을 생산할 수 있습니다.
            그러나 사람들이 일하는 시간은 하루 24시간으로 제한되어 있으므로,
            생산량을 무한히 늘릴 수는 없습니다. 마지막으로 '기술'은 물건을
            생산하는 능률을 의미합니다. 예를 들어, 신기술이 도입되어 자동차를
            생산하는 데 걸리는 시간이 줄어들면, 같은 시간 동안 더 많은 자동차를
            만들 수 있게 됩니다. 이처럼 기술 발전은 제한된 자원을 더 효율적으로
            활용하여 경제 성장을 이끌어낼 수 있습니다. 이처럼 경제 성장 모형은
            복잡한 경제 현상을 단순하게 이해할 수 있도록 도와주는 도구입니다.
            앞으로도 경제 뉴스를 들을 때, 솔로 모형에서 배운 '자본'과 '노동',
            '기술'의 개념을 활용하여 경제 성장의 원리를 이해하는 데 도움이 되길
            바랍니다.
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.labelContainer}>
              <div className={styles.label}>
                <div className={styles.main}>요약하기</div>
                <div className={styles.sub}>
                  글을 읽은 후 이해한 내용을 바탕으로 요약해주세요
                </div>
              </div>
              <div className={styles.btnContainer}>
                <Button
                  type={'0'}
                  width={119}
                  height={45}
                  content={'임시저장'}
                />
                <Button
                  type={'100'}
                  width={119}
                  height={45}
                  content={'저장하기'}
                  onClick={handleSumary}
                />
              </div>
            </div>
            <textarea
              value={content}
              className={styles.text}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default Write;
