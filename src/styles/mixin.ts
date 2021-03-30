import { css } from 'styled-components';

type TJustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'inherit'
  | 'initial';

type TAlignItems =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'initial'
  | 'inherit';

type TFlexDirection =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'
  | 'initial'
  | 'inherit';

export const mixin = {
  flexSet: (
    justifyContent: TJustifyContent = 'center',
    alignItems: TAlignItems = 'center',
    flexDirection: TFlexDirection = 'row',
  ) => css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `,
};
