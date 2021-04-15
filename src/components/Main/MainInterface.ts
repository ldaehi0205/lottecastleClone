export interface IPop {
  check?: boolean;
  eventFunc: (check: boolean | undefined) => void;
}
export interface IThumb {
  thumb_list: string[];
}
export interface ILabel {
  check: boolean;
  CheckEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
