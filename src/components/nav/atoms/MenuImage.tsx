import React from 'react';
import styled from 'styled-components';
import { INav } from '~/components/nav/NavInterface';

export const MenuImage: React.FC<INav> = ({ handleHome }) => {
  return (
    <TitleImg
      src='http://demer.lottecastle.co.kr/m/resources/img/m_logo.jpg'
      alt='call'
      onClick={handleHome}
    />
  );
};

const TitleImg = styled.img`
  width: 70%;
`;
