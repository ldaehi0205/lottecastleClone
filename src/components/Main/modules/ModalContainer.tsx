import React, { useContext } from 'react';
import styled from 'styled-components';
import { SlideContainer } from '~/components/Main/modules';
import { ControlBox } from '~/components/Main/atoms';
import { SlideImageClass } from '~/components/Main';
import { ThumbContext, Tvalue } from './ThumbGrid';

interface IModal {
  images: Array<SlideImageClass | string>;
}

export const ModalContainer: React.FC<IModal> = ({ images }) => {
  const Thumb = useContext<Tvalue | null>(ThumbContext);
  const { state, action } = Thumb as Tvalue;
  const handleClose = () => {
    action.setThumbIndex(null);
  };

  return (
    <ModalBox thumbIndex={state.thumbIndex}>
      <SlideContainer
        images={images}
        thumbIndex={state.thumbIndex}
        handleClose={handleClose}
        closeFunc
      />
    </ModalBox>
  );
};

const ModalBox = styled.div<{ thumbIndex: number | null }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 15% 5%;
  background: ${({ theme }) => theme.brown};
  opacity: ${props => (props.thumbIndex === null ? 0 : 1)};
  visibility: ${props => (props.thumbIndex === null ? 'hidden' : 'visible')};
  transition: all 0.5s;
  ${ControlBox} {
    right: 7%;
    top: 75%;
  }
`;
