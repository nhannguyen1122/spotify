import colors from "@Shared/style/palette.scss";
import { styled } from "@mui/material/styles";

export const sidebarWidth = "15rem";

export const SideBarContainer = styled(`div`)({
  display: "flex",
  // height: "100vh",
  zIndex: 8,
});

export const SidebarLeftMenu = styled(`div`)({
  height: "100vh",
  position: "fixed",
  width: sidebarWidth,
  backgroundColor: colors.primary,
  paddingLeft: "1rem",
  paddingTop: "1rem",
  color: colors.lightText,
});

export const SidebarRightContent = styled(`div`)({
  marginLeft: sidebarWidth,
  width: "100%",
});

export const OutletWrapper = styled(`div`)({
  paddingTop: "10rem",
  background: colors.headerBgc,
  height: "100vh",
  padding: "10rem 2rem",
});
