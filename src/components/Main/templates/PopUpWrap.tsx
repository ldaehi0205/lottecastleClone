import React from 'react';
import styled from 'styled-components';

export const PopUpWrap: React.FC = ({ children }) => {
  return <PopSection>{children}</PopSection>;
};

const PopSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  padding: 11vw 30px 0;
  background: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  z-index: 10;
`;
