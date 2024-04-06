import React from 'react';
import styles from './Write.module.scss';
import Button from '../../components/common/button/Button';

const Write = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}></div>
      <div className={styles.subContainer}>
        <div className={styles.leftContainer}>
          블록체인 기술은 비트코인과 이더리움과 같은 암호화폐의 기반이 되는
          혁신으로 디지털 거래를 인식하고 관리하는 방식을 혁신적으로
          바꾸었습니다. 핵심적으로 블록체인은 컴퓨터 네트워크 간 거래를 기록하는
          탈중앙화된 장부 시스템으로 투명성, 보안 및 불변성을 보장합니다. 각
          거래는 이전 거래와 암호적으로 연결되어 블록의 사슬을 형성하게 됩니다.
          암호화폐는 블록체인 기술을 활용하여 은행이나 정부와 같은 중개자 없이
          개인 간 거래를 가능하게 합니다. 비트코인은 처음으로 중앙 관리 기관과
          독립적으로 운영되는 디지털 통화 개념을 소개했습니다. 그 이후로 수천
          개의 암호화폐가 등장하여 각각의 고유한 특징과 사용 사례를 갖고
          있습니다. 블록체인 기술은 암호화폐를 통해 향상된 보안, 투명성 및
          중개자 제거를 통해 거래 비용 절감과 같은 여러 가지 이점을 제공합니다.
          또한, 블록체인은 암호화폐 이외에도 공급망 관리, 투표 시스템 및 디지털
          신원 확인과 같은 응용 분야를 갖고 있습니다. 그러나, 블록체인과
          암호화폐는 여러 가지 도전과 비판을 마주하고 있습니다. 확장성, 에너지
          소비량 (특히 작업 증명 합의 메커니즘의 경우), 규제적 불확실성 및 불법
          활동 가능성과 같은 우려 사항으로 인해 장기적인 지속 가능성과 사회에
          미치는 영향에 대한 논쟁이 일고 있습니다. 이러한 도전에도 불구하고,
          블록체인 기술과 암호화폐는 계속해서 진화하고 다양한 분야에서 투자와
          혁신을 유치하고 있습니다. 정부, 기업 및 개인들은 효율성, 투명성 및
          금융 포용성을 위해 블록체인의 잠재력을 활용하는 방법을 탐색하고
          있습니다. 결론적으로, 블록체인 기술과 암호화폐는 디지털 금융 및
          탈중앙화된 시스템의 혁신적인 진보를 나타냅니다. 도전이 남아있지만,
          그들의 혁신적인 잠재력은 금융, 기술 및 사회 전반에 걸쳐 미래를
          형성하고 있습니다.
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
              <Button type={'0'} width={119} height={45} content={'임시저장'} />
              <Button
                type={'100'}
                width={119}
                height={45}
                content={'저장하기'}
              />
            </div>
          </div>
          <textarea className={styles.text}></textarea>
        </div>
      </div>
    </div>
  );
};

export default Write;
