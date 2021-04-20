import React from 'react';
import styled from 'styled-components';
import Slick from './slick';

interface Props {
  index: number;
  header: string;
  subHeaderOne: string;
  subHeaderTwo: string;
  video: string;
}

const typeVideoSlick: React.FC<Props> = (props: any) => {
  return (
    <DetailArticle index={props.index}>
      <DetailHeader index={props.index}>{props.header}</DetailHeader>
      <DetailSubHeader>
        <div className='subHeaderOne'>{props.subHeaderOne}</div>
        <div className='subHeaderTwo'>{props.subHeaderTwo}</div>
      </DetailSubHeader>
      <DetailSection index={props.index}>
        <iframe
          src={props.video}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        />
        <Slick />
      </DetailSection>
    </DetailArticle>
  );
};

export default typeVideoSlick;

const DetailArticle = styled.div<{ index: number }>`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  width: 100%;
`;

const DetailHeader = styled.div<{ index: number }>`
  font-size: 28px;
  font-weight: 300;
  margin-bottom: 50px;

  p {
    margin: 0;
  }
`;

const DetailSection = styled.div<{ index: number }>`
  width: 492px;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 277px;
  }

  iframe {
    position: relative;
    width: 130%;
    height: 400px;
  }
`;

const DetailSubHeader = styled.div`
  position: relative;
  bottom: 80px;
  left: -220px;

  .subHeaderOne {
    position: relative;
    top: 12px;
    left: 280px;
    padding: 5px;
    background-color: rgb(233, 233, 233);
    font-size: 20px;
    z-index: 5;
  }

  .subHeaderTwo {
    position: relative;
    left: 220px;
    width: 180px;
    padding: 10px 20px;
    border-top: 1px solid rgb(213, 213, 213);
    font-size: 24px;
    font-weight: 600;
  }
`;
