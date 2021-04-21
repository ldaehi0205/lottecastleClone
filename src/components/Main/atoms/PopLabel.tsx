import React from 'react';
import styled from 'styled-components';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mixin } from '~/styles';

export interface ILabel {
  check: boolean;
  CheckEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PopLabel: React.FC<ILabel> = ({ children, check, CheckEvent }) => {
  return (
    <PopLabelBox>
      <CheckInput checked={check} onChange={CheckEvent} />
      <CheckBox checked={check}>
        <FontAwesomeIcon icon={faCheck} />
      </CheckBox>
      {children}
    </PopLabelBox>
  );
};

const PopLabelBox = styled.label`
  font-size: 13px;
  user-select: none;
  cursor: pointer;
`;

const CheckInput = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  width: 15px;
  height: 15px;
  margin: 0;
  opacity: 0;
`;

const CheckBox = styled.span<{ checked: boolean }>`
  ${mixin.flexSet('center', 'center')}
  display: inline-flex;
  border: 1px solid #cfcfcf;
  width: 21px;
  height: 21px;
  margin-right: 5px;
  svg {
    font-size: 11px;
    opacity: ${props => (props.checked ? 1 : 0)};
  }
`;
