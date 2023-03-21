import { Direction } from "@Shared/components/card/cards.interface";
import { ReactNode } from "react";
import { ComponentType } from "react";
import { ICard } from "@Shared/components/card/cards.interface";
export interface IOverView {
  title: string;
  cardData: ICard[];
  hasShowAll: boolean;
  maxItemPerRow: number;
  isCardItem?: boolean;
  cardItemDirection?: Direction;
  children?: JSX.Element;
}
