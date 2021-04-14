import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Menu } from './menu';

interface MenuProps {
  menuVisible: boolean;
  id: number;
  title: string;
  text: string;
  subText?: string[];
}
export const Nav: React.FC = () => {
  const [menuList, setMenuList] = useState<MenuProps[]>([]);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  1;

  useEffect(() => {
    fetch('data/MainList.json')
      .then(res => res.json())
      .then(res => setMenuList(res.results));
  }, []);

  const handleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <Container>
      <Header>
        <Link to='/main'>
          <TitleImg src='http://demer.lottecastle.co.kr/m/resources/img/m_logo.jpg'></TitleImg>
        </Link>
        <TItleBar>
          <Button>
            <img src='https://postfiles.pstatic.net/MjAyMTA0MTNfMjIy/MDAxNjE4MzEwOTM3ODEz.KB2oG2cOxI47aXNvilLhtYYRE5DLamYMNvsFQImVgS8g.Q018ar_l1nA9a3jvN7LquOAycw5FOLvKvy7ONNQ-7qQg.PNG.maplesosser/call.png?type=w966'></img>
          </Button>
          <Button name='show' onClick={handleMenu}>
            <img src='https://postfiles.pstatic.net/MjAyMTA0MTNfOTIg/MDAxNjE4MzEwOTMyNjg0.ZLMmzw5uz2m-Eoo3OXX19t7NgajGfcls4uU6hRFs04kg.teP73VeXJ6BvG9WvOzYgjpqk_8ZP8hHEqP0_GEWaiMYg.PNG.maplesosser/hambug.png?type=w966'></img>
          </Button>
        </TItleBar>
      </Header>
      <MenuBar menuVisible={menuVisible}>
        <Header>
          <TitleImg src='http://demer.lottecastle.co.kr/m/resources/img/m_logo.jpg'></TitleImg>
          <TItleBar>
            <Button>
              <img src='https://postfiles.pstatic.net/MjAyMTA0MTNfMjIy/MDAxNjE4MzEwOTM3ODEz.KB2oG2cOxI47aXNvilLhtYYRE5DLamYMNvsFQImVgS8g.Q018ar_l1nA9a3jvN7LquOAycw5FOLvKvy7ONNQ-7qQg.PNG.maplesosser/call.png?type=w966'></img>
            </Button>
            <Button onClick={handleMenu}>
              <img src='https://postfiles.pstatic.net/MjAyMTA0MTVfMTc5/MDAxNjE4NDY0ODIxNTcw.iyMumrJOOh61qG4XvcZUj2ifQ88oS0GvfMyrsoGE348g.bR2CKLV1MH8z_NaKBeynX-AQSedXfv7-fGAdCQszPmMg.PNG.maplesosser/%E3%84%B4%E3%84%B4.png?type=w966'></img>
            </Button>
          </TItleBar>
        </Header>
        <MenuContent>
          {menuList.length !== 0 &&
            menuList.map((list, idx) => {
              return (
                <Menu
                  key={idx}
                  count={idx}
                  id={list.id}
                  title={list.title}
                  text={list.text}
                  subText={list.subText}
                />
              );
            })}
        </MenuContent>
      </MenuBar>
    </Container>
  );
};

const Container = styled.div`
  max-width: 640px;
  min-width: 320px;
  margin: 0 auto;
  line-height: 1.5;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  margin: 0px auto;
  max-width: 640px;
  min-width: 320px;
  height: 100px;
  cursor: pointer;
`;

const TitleImg = styled.img`
  width: 448px;
`;

const TItleBar = styled.div`
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  width: 50%;
  height: 100%;
  background-color: white;
  border: none;
  outline: none;
  cursor: pointer;
  img {
    width: 85px;
  }
`;
const MenuBar = styled.div<{ menuVisible: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  max-width: 640px;
  top: 0;
  z-index: 1000000000;
  right: ${props => (props.menuVisible ? '0px' : '-640px')};
  transition: 0.25s ease-in-out;
`;

const MenuContent = styled.div`
  cursor: pointer;
  height: 500vh;
  width: 640px;
  color: #b7956e;
  transition: 0.45s;
  background-color: #292929;
`;
export default Nav;
