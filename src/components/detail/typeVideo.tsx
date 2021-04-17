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
        <iframe
          src={props.video}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        />
      </DetailSection>
    </DetailArticle>
  );
};

export default typeVideo;

const DetailArticle = styled.div<{ index: number }>`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  width: 100%;
  align-items: center;
`;

const DetailSection = styled.div<{ index: number }>`
  width: 492px;
  display: flex;
  flex-direction: column;

  iframe {
    position: relative;
    width: 100%;
    height: 400px;
  }
`;
