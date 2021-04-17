import React from 'react';
import styled from 'styled-components';

interface Props {
  index: number;
  header: string;
  img: string;
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
  contenttitle6: string;
  contentsub6: string;
  contenttitle7: string;
  contentsub7: string;
  text: string;
  text1: string;
  text2: string;
}

const typeImgSummary: React.FC<Props> = (props: any) => {
  return (
    <DetailArticle index={props.index}>
      <DetailHeader index={props.index}>{props.header}</DetailHeader>
      <DetailSection index={props.index}>
        <img src={props.img} />
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
        <p className='sectionInfoTitle'>{props.contenttitle6}</p>
        <p className='sectionInfoContent'>{props.contentsub6}</p>
        <p className='sectionInfoTitle'>{props.contenttitle7}</p>
        <p className='sectionInfoContent'>{props.contentsub7}</p>
      </DetailSectionInfo>
      <TextBox>
        {props.text !== '' && (
          <>
            <p>{props.text}</p>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
          </>
        )}
      </TextBox>
    </DetailArticle>
  );
};

export default typeImgSummary;

const DetailArticle = styled.div<{ index: number }>`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  width: 100%;
  align-items: center;
`;

const TextBox = styled.div`
  margin: 50px auto;

  p {
    font-size: 11px;
    text-indent: -12px;
  }
`;

const DetailHeader = styled.div<{ index: number }>`
  width: 350px;
  font-size: 28px;
  font-weight: 300;
  margin-bottom: 50px;
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
    width: 100%;
    height: 400px;
  }
`;

const DetailSectionInfo = styled.div`
  border-left: 1px solid rgb(200, 200, 200);
  padding-left: 20px;
  margin-top: 80px;
  width: 452px;

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
