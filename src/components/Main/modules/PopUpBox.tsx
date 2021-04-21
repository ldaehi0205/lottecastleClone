import React, { useState } from 'react';
import styled from 'styled-components';
import { mixin } from '~/styles';
import { DefaultImage, PopButton, PopLabel, IPop } from '~/components';

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

const PopUpContainer = styled.div`
  max-width: 640px;
  margin: 0 auto;
`;

const ControlBox = styled.div`
  ${mixin.flexSet('space-between', 'center')};
  padding: 5px 5%;
  background: ${({ theme }) => theme.white};
`;
