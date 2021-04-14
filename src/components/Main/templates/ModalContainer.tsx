import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThumbContext } from '~/components/Main/templates';
import { SlideContainer } from '~/components/Main/modules';
import { ControlBox } from '~/components/Main/atoms';

interface IModal {
  images: string[] | { [key: string]: any };
}

export const ModalContainer: React.FC<IModal> = ({ images }) => {
  const Thumb = useContext<any>(ThumbContext);
  const { state, action } = Thumb;
  return (
    <ModalBox thumbIndex={state.thumbIndex}>
      <SlideContainer
        images={images}
        thumbIndex={state.thumbIndex}
        setThumbIndex={action.setThumbIndex}
        closeFunc
      />
    </ModalBox>
  );
};

const ModalBox = styled.div<{ thumbIndex: null | number }>`
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
