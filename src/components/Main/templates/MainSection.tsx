import React from 'react';
import styled, { css } from 'styled-components';
import { ControlBox } from '~/components';

interface IMainType {
  layout: number;
  background?: string;
}

export const MainSection: React.FC<IMainType> = ({
  layout,
  background,
  children,
}) => {
  return (
    <SectionContainer layout={layout} background={background}>
      {children}
    </SectionContainer>
  );
};

const SectionContainer = styled.section<IMainType>`
  ${props => {
    const { background } = props;
    if (props.layout === 1) {
      return css`
        background: url(${background});
        background-size: cover;
        padding: 15% 0 10%;
        position: relative;
        ${ControlBox} {
          top: 7.8%;
          right: 5%;
        }
      `;
    } else if (props.layout === 2) {
      return css`
        background: url(${background});
        background-size: cover;
        padding: 15% 0;
        position: relative;
        ${ControlBox} {
          top: 7.8%;
          right: 5%;
        }
      `;
    } else if (props.layout === 3) {
      return css`
        background: #e9e9e9;
        padding: 15% 5%;
        position: relative;
      `;
    }
  }}
`;
