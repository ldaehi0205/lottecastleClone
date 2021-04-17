import React from 'react';
import styled from 'styled-components';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MenuCallButton: React.FC = () => {
  return (
    <BtnCall>
      <FontAwesomeIcon icon={faPhoneAlt} size='2x' />
    </BtnCall>
  );
};

const BtnCall = styled.button`
  width: 100%;
  background-color: white;
  border: none;
  outline: none;
  cursor: pointer;
`;
