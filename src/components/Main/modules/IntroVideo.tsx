import React from 'react';
import styled from 'styled-components';
import { DefaultImage } from '~/components/common';

interface IVideo {
  video: {
    image: string;
    link: string;
  };
}

export const IntroVideo: React.FC<IVideo> = ({ video: { image, link } }) => {
  return (
    <VideoBox href={link} target='_blank'>
      <DefaultImage src={image} alt='배너 영상 이미지' />
    </VideoBox>
  );
};

const VideoBox = styled.a`
  display: block;
`;
