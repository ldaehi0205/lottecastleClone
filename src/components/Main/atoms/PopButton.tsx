import React from 'react';
import styled from 'styled-components';

export interface IPop {
  check?: boolean;
  eventFunc: (check: boolean | undefined) => void;
}

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
  padding: 0;
  border: none;
  background: none;
  color: #262626;
  font-size: 13px;
  cursor: pointer;
`;
