import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { mixin } from '~/styles';

export interface ISlideBtn {
  closeFunc?: boolean;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose?: () => void;
}

export const SlideBtns: React.FC<ISlideBtn> = ({
  closeFunc,
  handleClick,
  handleClose,
}) => {
  return (
    <ControlBox>
      <SlideBtn name='prev' onClick={handleClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </SlideBtn>
      <SlideBtn name='next' onClick={handleClick}>
        <FontAwesomeIcon icon={faChevronRight} />
      </SlideBtn>
      {closeFunc && (
        <SlideBtn name='close' onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} />
        </SlideBtn>
      )}
    </ControlBox>
  );
};

export const ControlBox = styled.div`
  position: absolute;
  z-index: 3;
`;

const SlideBtn = styled.button`
  ${mixin.flexSet('center', 'center')};
  display: inline-flex;
  width: 30px;
  height: 30px;
  padding: 0;
  margin: 0 3.5px;
  background: ${props => (props.name === 'close' ? props.theme.white : 'none')};
  border-radius: 50%;
  border: ${props =>
    props.name === 'close'
      ? `1px solid ${props.theme.white}`
      : '1px solid rgba(255, 255, 255, 0.2)'};
  color: ${props =>
    props.name === 'close' ? props.theme.browny : props.theme.white};
  font-size: 12px;
  cursor: pointer;
  outline: none;

  svg {
    pointer-events: none;
  }
`;
