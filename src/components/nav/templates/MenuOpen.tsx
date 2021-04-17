import React from 'react';
import styled from 'styled-components';
import Menu from '../modules/Menu';
import { NavbarContainer } from '../modules/NavbarContainer';
import { MainProps } from '~/components/nav/NavInterface';

export const MenuOpen: React.FC<MainProps> = ({
  handleHome,
  menuList,
  activeIndex,
  showVisible,
  handleMenu,
  handleSelect,
  handlePage,
}) => {
  return (
    <MenuBar showVisible={showVisible}>
      <NavbarContainer
        handleMenu={handleMenu}
        handleHome={handleHome}
        name='cancel'
      />
      <MenuContent>
        {menuList.length !== 0 &&
          menuList.map((list: any, idx: number) => {
            return (
              <Menu
                key={idx}
                count={idx}
                id={list.id}
                title={list.title}
                text={list.text}
                subText={list.subText}
                activeIndex={activeIndex}
                handleSelect={handleSelect}
                handlePage={handlePage}
              />
            );
          })}
      </MenuContent>
    </MenuBar>
  );
};

const MenuBar = styled.div<{ showVisible: boolean }>`
  position: absolute;
  background-color: #292929;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 9;
  right: ${props => (props.showVisible ? '0px' : '-640px')};
  transition: 0.2s ease-in-out;
`;

const MenuContent = styled.div`
  width: 100%;
  background-color: #292929;
  color: #b7956e;
  transition: 0.45s;
  cursor: pointer;
`;
