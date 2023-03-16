import styled from "@emotion/styled";
import colors from "@Shared/style/palette.scss";
export const PlayerContainer = styled(`div`)({
  background: colors.bgGrey,
  zIndex: 1500,
  color: colors.lightText,
  position: "fixed",
  bottom: 0,
  width: "100%",
  height: "6.25rem",
});
