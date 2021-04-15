import React, { createContext, useContext, useState } from 'react';
import styled from 'styled-components';
import { DefaultImage } from '~/components/common';
import { IThumb } from '~/components/Main/MainInterface';

export const ThumbContext = createContext(null);

export const ThumbProvider: React.FC = ({ children }) => {
  const [thumbIndex, setThumbIndex] = useState<number | null>(null);
  const handleThumbIndex = (index: number | null) => {
    setThumbIndex(index);
  };

  const value: any = {
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

export const ThumbGrid: React.FC<IThumb> = ({ thumb_list }) => {
  const Thumb = useContext<any>(ThumbContext);
  const { action } = Thumb;
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

const GridBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
`;

const GridItem = styled.li`
  cursor: pointer;
`;
