import React, { createContext, useContext, useState } from 'react';
import styled from 'styled-components';
import { DefaultImage } from '~/components';

interface IGrid {
  thumb_list: string[];
}

export const ThumbGrid: React.FC<IGrid> = ({ thumb_list }) => {
  const Thumb = useContext<Tvalue | null>(ThumbContext);
  const { action } = Thumb as Tvalue;
  return (
    <GridBox>
      {thumb_list.map((list, index) => (
        <GridItem
          key={index}
          onClick={() => {
            action.handleThumbIndex(index);
          }}
        >
          <DefaultImage src={list} alt='썸네일 이미지' />
        </GridItem>
      ))}
    </GridBox>
  );
};

export type Tvalue = {
  state: { thumbIndex: number | null };
  action: {
    setThumbIndex: React.Dispatch<React.SetStateAction<number | null>>;
    handleThumbIndex: (index: number | null) => void;
  };
};

export const ThumbContext = createContext<Tvalue | null>(null);

export const ThumbProvider: React.FC = ({ children }) => {
  const [thumbIndex, setThumbIndex] = useState<number | null>(null);
  const handleThumbIndex = (index: number | null) => {
    setThumbIndex(index);
  };
  const value: Tvalue = {
    state: {
      thumbIndex,
    },
    action: {
      setThumbIndex,
      handleThumbIndex,
    },
  };

  return (
    <ThumbContext.Provider value={value}>{children}</ThumbContext.Provider>
  );
};

const GridBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
`;

const GridItem = styled.li`
  cursor: pointer;
`;
