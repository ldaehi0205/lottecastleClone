import React from 'react';
import styled from 'styled-components';
import { MenuImage } from '../atoms/MenuImage';
import { MenuCancelButton } from '../atoms/MenuCancelButton';
import { MenuCallButton } from '../atoms/MenuCallButton';
import { MenuButton } from '../atoms/MenuButton';
import { INav } from 'components/nav/NavInterface';

export const NavbarContainer: React.FC<INav> = ({
  handleMenu,
  handleHome,
  name,
}) => {
  return (
    <Header>
      <MenuImage handleHome={handleHome} />
      <MenuCallButton />
      {name === 'menu' ? (
        <MenuButton handleMenu={handleMenu} />
      ) : (
        <MenuCancelButton handleMenu={handleMenu} />
      )}
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  margin: 0px auto;
  cursor: pointer;
`;
