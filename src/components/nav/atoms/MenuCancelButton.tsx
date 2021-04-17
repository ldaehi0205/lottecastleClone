import React from 'react';
import styled from 'styled-components';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { INav } from '~/components/nav/NavInterface';

export const MenuCancelButton: React.FC<INav> = ({ handleMenu }) => {
  return (
    <BtnCancel onClick={handleMenu}>
      <FontAwesomeIcon icon={faTimes} size='2x' />
    </BtnCancel>
  );
};

const BtnCancel = styled.button`
  width: 100%;
  background-color: white;
  border: none;
  outline: none;
  cursor: pointer;
`;
