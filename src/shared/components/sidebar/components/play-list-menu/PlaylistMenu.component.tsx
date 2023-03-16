import React from "react";
import AppButton from "@/shared/components/button/Button.component";
import { fakeMenu } from "./playlist.fake";
import { IPlaylist } from "./playlist.interface";
import {
  PlaylistContainer,
  PlayListItems,
  PlaylistListContainer,
} from "./playlist.style";

function PlayListMenu(props: IPlaylist) {
  const renderPlaylist = () => {
    return (
      <PlaylistListContainer>
        {fakeMenu.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <PlayListItems>{item.title}</PlayListItems>
            </React.Fragment>
          );
        })}
      </PlaylistListContainer>
    );
  };

  return (
    <PlaylistContainer
      sx={{
        height: `calc(100vh - ${props.bigMenuHeight}px - 248px)`,
      }}
    >
      {renderPlaylist()}
      <AppButton icon="download" color="primary" variant="contained">
        Cài đặt ứng dụng
      </AppButton>
    </PlaylistContainer>
  );
}

export default PlayListMenu;
