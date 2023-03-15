import { styled } from "@mui/material/styles";
import playerHeight from "@Shared/style/variable.scss";
// const playerHeights = playerHeight;
const windowHeight = window.innerHeight - 90;

export const PlaylistContainer = styled(`div`)({
  color: "inherit",
  height: windowHeight,
  border: "1px solid red",
});
