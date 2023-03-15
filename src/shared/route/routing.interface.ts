import { ComponentType, LazyExoticComponent, ReactNode } from "react";

export interface IRoute {
    path:string;
    element:ReactNode|ComponentType|LazyExoticComponent<()=>JSX.Element>|any;
    children?:IRoute[]
}