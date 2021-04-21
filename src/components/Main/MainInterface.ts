export interface ITitle {
  title: string;
}
export interface IVideo extends ITitle {
  video: string[];
}
export interface IThumb extends IVideo {
  thumb_list: string[];
}
