import React from 'react';
import styled from 'styled-components';

interface Props {
  index: number;
  video: string;
}

const typeVideo: React.FC<Props> = (props: any) => {
  return (
    <DetailArticle index={props.index}>
      <DetailSection index={props.index}>
        <iframe src={props.video} />
      </DetailSection>
    </DetailArticle>
  );
};

export default typeVideo;

const DetailArticle = styled.div<{ index: number }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 100px;
  align-items: center;
`;

const DetailSection = styled.div<{ index: number }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

  iframe {
    position: relative;
    width: 100%;
    height: 350px;
  }
`;
