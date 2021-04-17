import React from 'react';
import styled from 'styled-components';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { INav } from '~/components/nav/NavInterface';

export const MenuButton: React.FC<INav> = ({ handleMenu }) => {
  return (
    <BtnMenu onClick={handleMenu}>
      <FontAwesomeIcon icon={faBars} size='2x' />
    </BtnMenu>
  );
};

const BtnMenu = styled.button`
  width: 100%;
  background-color: white;
  border: none;
  outline: none;
  cursor: pointer;
`;
