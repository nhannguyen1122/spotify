import React from "react";
import { Outlet } from "react-router-dom";
import {
  SideBarContainer,
  SidebarLeftMenu,
  SidebarRightContent,
} from "./components/sidebar.style";
import BigMenu from "./components/big-menu/BigMenu.component";
import PlayListMenu from "./components/play-list-menu/PlaylistMenu.component";
function SideBar() {
  return (
    <SideBarContainer>
      <SidebarLeftMenu>
        <BigMenu></BigMenu>
        <PlayListMenu></PlayListMenu>
      </SidebarLeftMenu>

      <SidebarRightContent>
        <Outlet />
      </SidebarRightContent>
    </SideBarContainer>
  );
}
export default SideBar;
