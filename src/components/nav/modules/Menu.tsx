import React from 'react';
import styled from 'styled-components';
import { MenuProps } from 'components/nav/NavInterface';

export const Menu: React.FC<MenuProps> = ({
  count,
  title,
  text,
  subText,
  activeIndex,
  handleSelect,
  handlePage,
}) => {
  return (
    <ListElement>
      <ListTitle
        count={count}
        activeIndex={activeIndex}
        onClick={() => handleSelect(count)}
      >
        {title}
      </ListTitle>
      <ListText count={count} activeIndex={activeIndex}>
        {text}
      </ListText>

      <SubWrapper count={count} activeIndex={activeIndex}>
        {count === activeIndex && (
          <ListSubText>
            {subText?.map((text: any) => (
              <ListSubElement key={text.id} onClick={() => handlePage(text.id)}>
                {text.subTitle}
              </ListSubElement>
            ))}
          </ListSubText>
        )}
      </SubWrapper>
    </ListElement>
  );
};

const ListElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const ListTitle = styled.div<{
  count: number;
  activeIndex: number | null;
}>`
  font-family: 'Roboto', sans-serif;
  color: ${props =>
    props.count === props.activeIndex ? '#b7956e' : '#FFFFFF'};
  border: 600;
  margin-top: 50px;
  font-size: 26px;
  text-transform: uppercase;
`;

const ListText = styled.div<{
  count: number;
  activeIndex: number | null;
}>`
  font-size: 16px;
  color: ${props =>
    props.count === props.activeIndex ? '#b7956e' : '#8C7459'};
`;

const SubWrapper = styled.div<{
  count: number;
  activeIndex: number | null;
}>`
  display: ${props => (props.count === props.activeIndex ? 'block' : 'none')};
  opacity: ${props => (props.count === props.activeIndex ? '1' : '0')};
  animation: dropDown 0.15s ease-in;
  @keyframes dropDown {
    0% {
      height: 0px;
    }
    100% {
      height: 200px;
    }
  }
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
  padding: 15px 0;
`;

export default Menu;
