import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing:border-box;
  }
  #root{
    overflow: hidden;
    max-width: 640px;
    min-width: 320px;
    min-height: 568px;
    margin: 0 auto;
    line-height: 1.5;
    position: relative;
  }
`;
