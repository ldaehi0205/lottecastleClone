import React from 'react';
import styled from 'styled-components';

interface Props {
  index: number;
  img: string;
  hieght: string;
  text: string;
}

const typeImg: React.FC<Props> = ({
  index,
  img,
  hieght,
  text,
}): JSX.Element => {
  return (
    <DetailArticle index={index}>
      <DetailSection index={index} hieght={hieght}>
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
  width: 100%;
  align-items: center;

  p {
    font-size: 11px;
    margin: 40px;
    padding: 0px 20px;
    text-indent: -12px;
  }
`;

const DetailSection = styled.div<{ index: number; hieght: string }>`
  width: 492px;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: ${props => props.index && `${props.hieght}`};
  }
`;
