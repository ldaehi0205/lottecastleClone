import { theme } from './theme';

type TTheme = typeof theme;

declare module 'styled-components' {
  interface DefaultTheme extends TTheme {}
}
