export interface MenuProps {
  key: number;
  id: number;
  title: string;
  text: string;
  count: number;
  subText?: string[];
  activeIndex: number | null;
  handleSelect: (count: number | null) => void;
  handlePage: (id: number) => void;
}

export interface INav {
  handleMenu?: () => void;
  handleHome?: () => void;
  name?: string;
}

export interface MainProps {
  handleSelect: (count: number | null) => void;
  handleMenu: () => void;
  handleHome: () => void;
  handlePage: (id: number) => void;
  showVisible: boolean;
  activeIndex: number | null;
  menuList: any;
}
