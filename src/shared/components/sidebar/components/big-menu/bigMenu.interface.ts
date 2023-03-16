import { IconType } from "@/asserts/icon/Icon.config";

export interface IMenuData {
  id: number;
  icon: IconType;
  title: string;
  redirectPath: string;
}

export interface IMenuConfig {
  id: string;
  name: string;
  config: IMenuData[];
}

export interface IBigMenu {
  id?: string;
}
