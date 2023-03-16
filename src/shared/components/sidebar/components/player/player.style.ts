import colors from "@Shared/style/palette.scss";
import { styled } from "@mui/material/styles";

export const PlayerSx = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
};

export const PlayerContainer = styled(`div`)({
  background: colors.bgGrey,
  zIndex: 1500,
  color: colors.lightText,
  position: "fixed",
  bottom: 0,
  width: "100%",
  height: "6.25rem",
});
