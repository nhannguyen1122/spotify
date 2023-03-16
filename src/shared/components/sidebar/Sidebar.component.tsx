import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import {
  SideBarContainer,
  SidebarLeftMenu,
  SidebarRightContent,
} from "./components/sidebar.style";
import BigMenu from "./components/big-menu/BigMenu.component";
import PlayListMenu from "./components/play-list-menu/PlaylistMenu.component";
import AppPlayer from "./player/Player.component";
function SideBar() {
  const bigMenuRef = useRef<any>(null);
  const [bigMenuHeight, setBigMenuHeight] = useState<number>(0);

  useEffect(() => {
    setBigMenuHeight(
      bigMenuRef.current.bigMenuContainerRef().current.offsetHeight
    );
  }, [bigMenuRef]);

  return (
    <React.Fragment>
      <SideBarContainer>
        <SidebarLeftMenu>
          <BigMenu ref={bigMenuRef}></BigMenu>
          <PlayListMenu bigMenuHeight={bigMenuHeight}></PlayListMenu>
        </SidebarLeftMenu>

        <SidebarRightContent>
          <Outlet />
        </SidebarRightContent>
      </SideBarContainer>

      <AppPlayer></AppPlayer>
    </React.Fragment>
  );
}
export default SideBar;
