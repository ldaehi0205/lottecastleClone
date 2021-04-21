import React from 'react';
import styled from 'styled-components';
import { DefaultImage, ITitle } from '~/components';

export const ContentTitle: React.FC<ITitle> = ({ title }) => {
  return (
    <TitleBox>
      <DefaultImage src={title} alt='타이틀 이미지'></DefaultImage>
    </TitleBox>
  );
};

const TitleBox = styled.p`
  padding-bottom: 8%;
`;
