import colors from "@Shared/style/palette.scss";
import { styled } from "@mui/material/styles";
import { sidebarWidth } from "../sidebar.style";

export const upgradeBtnSx = {
  border: `1px solid ${colors.lightText}`,
  borderRadius: "31.25rem",
  backgroundColor: "transparent",
  color: colors.light,
};

export const AppHeaderContainer = styled(`div`)({
  position: "fixed",
  width: `calc(100% - ${sidebarWidth})`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: colors.headerBgc,
  zIndex: 9,
  padding: "1rem",
});

export const NavigateWrapper = styled(`div`)({});

export const UserInfoWrapper = styled(`div`)({
  display: "flex",
});
