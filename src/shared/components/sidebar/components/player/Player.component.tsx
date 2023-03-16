import React from "react";
import { PlayerContainer, PlayerSx } from "./player.style";
import PlayerDescription from "./components/player-description/PlayerDescription.component";
import PlayerMainControl from "./components/player-main-control/PlayerMainControl.component";
import PlayerOtherControl from "./components/player-other-control/PlayerOtherControl.Component";

function AppPlayer() {
  return (
    <PlayerContainer sx={PlayerSx}>
      <PlayerDescription />
      <PlayerMainControl />
      <PlayerOtherControl />
    </PlayerContainer>
  );
}
export default AppPlayer;
