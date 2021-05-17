import React from 'react';
import styled from 'styled-components';

interface Props {
  index: number;
  img: string;
  text: string;
}

const typeImg: React.FC<Props> = ({ index, img, text }): JSX.Element => {
  return (
    <DetailArticle index={index}>
      <DetailSection>
        <img src={img} />
      </DetailSection>
      {text !== '' && <p>{text}</p>}
    </DetailArticle>
  );
};

export default typeImg;

const DetailArticle = styled.div<{ index: number }>`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;

  p {
    margin: 40px;
    padding: 0px 20px;
    font-size: 11px;
    text-indent: -12px;
  }
`;

const DetailSection = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }
`;
