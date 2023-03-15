/**
 * vertical:dọc
 * horizontal:ngang
 */

export enum CardDirection {
  VERTICAL = "vertical",
  HORIZONTAL = "horizontal",
}

export type Direction = "vertical" | "horizontal";

export interface ICard {
  direction?: Direction | CardDirection;
  image?: string;
  title?: string;
  description?: string;
  showPlayBtn?: boolean;
  children?: JSX.Element;
}
