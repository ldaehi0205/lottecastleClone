import React from 'react';
import styled from 'styled-components';
import { DefaultImage } from '~/components';

export const VideoLink: React.FC<{ video: string[] }> = ({ video }) => {
  const [link, image] = video;
  return (
    <VideoBox href={link} target='_blank'>
      <DefaultImage src={image} alt='배너 영상 이미지' />
    </VideoBox>
  );
};

export const VideoBox = styled.a`
  display: block;
`;
