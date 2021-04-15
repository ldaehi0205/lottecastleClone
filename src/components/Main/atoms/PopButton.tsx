import React from 'react';
import styled from 'styled-components';
import { IPop } from '~/components/Main';

export const PopButton: React.FC<IPop> = ({ children, check, eventFunc }) => {
  return (
    <PopButtonWrap
      onClick={() => {
        eventFunc(check);
      }}
    >
      {children}
    </PopButtonWrap>
  );
};

const PopButtonWrap = styled.button`
  border: none;
  background: none;
  padding: 0;
  color: #262626;
  font-size: 13px;
  cursor: pointer;
`;
