import React from 'react';
import { NavbarContainer } from '../modules/NavbarContainer';

interface IClose {
  handleMenu: () => void;
  handleHome: () => void;
}

export const MenuClose: React.FC<IClose> = ({ handleMenu, handleHome }) => {
  return (
    <NavbarContainer
      handleMenu={handleMenu}
      handleHome={handleHome}
      name='menu'
    />
  );
};
