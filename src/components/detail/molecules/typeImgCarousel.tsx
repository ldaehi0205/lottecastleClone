import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Imgcarousel from '../atoms/imgcarousel';

interface Props {
  index: number;
  header: string;
  contenttitle: string;
  contentsub: string;
  contenttitle2: string;
  contentsub2: string;
  contenttitle3: string;
  contentsub3: string;
  contenttitle4: string;
  contentsub4: string;
  contenttitle5: string;
  contentsub5: string;
}

const typeImgCarousel: React.FC<Props> = (props: any) => {
  const [stateWidth, setstateWidth] = useState<number>(0);
  useEffect(() => {
    const wideRange = document.getElementById('1') as HTMLElement;
    setstateWidth(wideRange.offsetWidth);
  }, [stateWidth]);
  return (
    <div id='1'>
      <DetailArticle index={props.index}>
        <DetailHeader index={props.index}>{props.header}</DetailHeader>
        <DetailSection index={props.index}>
          <Imgcarousel />
        </DetailSection>
        <DetailSectionInfo>
          <p className='sectionInfoTitle'>{props.contenttitle}</p>
          <p className='sectionInfoContent'>{props.contentsub}</p>
          <p className='sectionInfoTitle'>{props.contenttitle2}</p>
          <p className='sectionInfoContent'>{props.contentsub2}</p>
          <p className='sectionInfoTitle'>{props.contenttitle3}</p>
          <p className='sectionInfoContent'>{props.contentsub3}</p>
          <p className='sectionInfoTitle'>{props.contenttitle4}</p>
          <p className='sectionInfoContent'>{props.contentsub4}</p>
          <p className='sectionInfoTitle'>{props.contenttitle5}</p>
          <p className='sectionInfoContent'>{props.contentsub5}</p>
        </DetailSectionInfo>
      </DetailArticle>
    </div>
  );
};

export default typeImgCarousel;

const DetailArticle = styled.div<{ index: number }>`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 100px;
  width: 100%;
  align-items: center;
`;

const DetailHeader = styled.div<{ index: number }>`
  width: 180px;
  font-size: 28px;
  font-weight: 300;
  margin-bottom: 50px;

  p {
    margin: 0;
  }
`;

const DetailSection = styled.div<{ index: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: 277px;
  }
`;

const DetailSectionInfo = styled.div`
  margin-top: 80px;
  padding-left: 20px;
  border-left: 1px solid rgb(200, 200, 200);

  .sectionInfoTitle {
    margin-top: 8px;
    color: rgb(157, 132, 103);
    font-size: 18px;
  }

  .sectionInfoContent {
    margin-top: 3px;
    color: rgb(57, 57, 57);
    font-size: 18px;
  }
`;
