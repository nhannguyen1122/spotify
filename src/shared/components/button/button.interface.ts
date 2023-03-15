import { IconType } from "@/asserts/icon/Icon.config";

export enum ButtonMode {
  ICON = "icon",
  BUTTON = "button",
}

export interface IButton {
  class?: string;
  isIcon?: boolean;
  icon?: IconType;
}
