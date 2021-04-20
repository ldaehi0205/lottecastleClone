import React from 'react';
import styled from 'styled-components';

interface Props {
  index: number;
  img: string;
  hieght: string;
}

const typeImg: React.FC<Props> = ({ index, img, hieght }): JSX.Element => {
  return (
    <DetailArticle index={index}>
      <DetailSection index={index} hieght={hieght}>
        <img src={img} />
      </DetailSection>
      <VrSection>
        <a
          href='http://demer.lottecastle.co.kr/m/pages/unit/vr/46a/index.html'
          target='_blank'
          rel='noreferrer'
        >
          <img src='http://demer.lottecastle.co.kr/m/resources/img/sub/m_vr_btn1.jpg' />
        </a>
        <a
          href='http://demer.lottecastle.co.kr/m/pages/unit/vr/46a/index.html'
          target='_blank'
          rel='noreferrer'
        >
          <img src='http://demer.lottecastle.co.kr/m/resources/img/sub/m_vr_btn2.jpg' />
        </a>
        <a
          href='http://demer.lottecastle.co.kr/m/pages/unit/vr/46a/index.html'
          target='_blank'
          rel='noreferrer'
        >
          <img src='http://demer.lottecastle.co.kr/m/resources/img/sub/m_vr_btn3.jpg' />
        </a>
      </VrSection>
      <TextBox>
        <p>
          ※ 상기 VR은 소비자의 이해를 돕기 위한 것으로 각종 전시물, 연출용
          시공부분이 포함되었으니 계약 시 필히 확인하시기 바랍니다.
        </p>
        <p>
          ※ 상기 VR은 실제 견본주택을 촬영한 영상으로 실제 시공시 다소 차이가
          있을 수 있으며, 조명의 각도, 빛의 반사에 따라 색상 및 질감이 다르게
          보일 수 있습니다.
        </p>
      </TextBox>
    </DetailArticle>
  );
};

export default typeImg;

const DetailArticle = styled.div<{ index: number }>`
  display: flex;
  flex-direction: column;
  width: 492px;
  margin: auto;
`;

const DetailSection = styled.div<{ index: number; hieght: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;

  img {
    width: 100%;
    height: ${props => props.index && `${props.hieght}`};
  }
`;

const VrSection = styled.div`
  width: 100%;
  margin-top: 30px;

  img {
    height: 110px;
    margin-top: 20px;
  }
`;

const TextBox = styled.div`
  margin: 50px auto;

  p {
    font-size: 11px;
    text-indent: -12px;
  }
`;
