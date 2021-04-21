import React from 'react';
import styled from 'styled-components';
import { DefaultImage } from '~/components';

export const IntroImg: React.FC<{ intro: string }> = ({ intro }) => {
  return (
    <IntroImgBox>
      <DefaultImage src={intro} alt='배너 이미지' />
    </IntroImgBox>
  );
};

export const IntroImgBox = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: 2;
`;
