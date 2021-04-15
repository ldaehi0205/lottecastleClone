import React, { useState } from 'react';
import styled from 'styled-components';
import { DefaultImage } from '~/components/common';
import { mixin } from '~/styles';
import { PopButton } from '~/components/Main/atoms';
import { PopLabel } from '~/components/Main/atoms';
import { IPop } from '~/components/Main';

export const PopUpBox: React.FC<IPop> = ({ eventFunc }) => {
  const [check, setCheck] = useState<boolean>(false);
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCheck(e.target.checked);
  };
  return (
    <PopUpContainer>
      <DefaultImage
        src='http://demer.lottecastle.co.kr/resources/img/popup/popup_20210401.jpg'
        alt='팝업 이미지'
      />
      <ControlBox>
        <PopLabel check={check} CheckEvent={handleCheck}>
          오늘 이창을 열지 않음
        </PopLabel>
        <PopButton check={check} eventFunc={eventFunc}>
          닫기
        </PopButton>
      </ControlBox>
    </PopUpContainer>
  );
};

const PopUpContainer = styled.div``;

const ControlBox = styled.div`
  ${mixin.flexSet('space-between', 'center')};
  padding: 5px 5%;
  background: ${({ theme }) => theme.white};
`;
