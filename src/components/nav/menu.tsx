import React, { useState } from 'react';
import styled from 'styled-components';

interface MenuProps {
  key: number;
  id: number;
  title: string;
  text: string;
  count: number;
  subText?: string[];
}

export const Menu: React.FC<MenuProps> = ({ count, title, text, subText }) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [menuClick, setMenuClick] = useState<number>(99);
  const handleMenu = (index: number) => {
    setMenuClick(index);
    setClicked(!menuClick);
  };
  return (
    <ListElement>
      <ListTitle
        count={count}
        clicked={clicked}
        onClick={() => handleMenu(count)}
      >
        {title}
      </ListTitle>
      <ListText>{text}</ListText>
      <SubWrapper>
        <ListSubText>
          {subText?.map((text: string, index: number) => (
            <ListSubElement key={index}>{text}</ListSubElement>
          ))}
        </ListSubText>
      </SubWrapper>
    </ListElement>
  );
};

const ListElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 640px;
`;

const ListTitle = styled.div<{ clicked: boolean; count: number }>`
  color: ${props => (props.clicked ? '#b7956e' : '#FFFFFF')};
  border: 600;
  padding-top: 50px;
  font-size: 26px;
  text-transform: uppercase;
`;

const ListText = styled.div`
  font-size: 16px;
`;

const SubWrapper = styled.div`
  display: flex;
`;

const ListSubText = styled.div`
  font-size: 14px;
  width: 100%;
  color: white;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const ListSubElement = styled.div`
  text-align: center;
  padding: 10px 0 10px;
`;

export default Menu;
