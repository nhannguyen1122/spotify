import colors from "@Shared/style/palette.scss";
import { styled } from "@mui/material/styles";

export const menuIconSx = {
  color: colors.lightText,
};

export const MenuDividerSx = {
  background: colors.lightText,
  marginRight: "1rem",
  marginBottom: "1rem",
};

export const LogoContainer = styled(`div`)({
  marginTop: "1rem",
  marginBottom: "1rem",
});

export const MenuLinkWrapper = styled(`div`)({
  marginBottom: "1rem",
  cursor: "pointer",
});

export const MenuLinkContainer = styled(`div`)({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  marginBottom: "0.5rem",
  marginRight: "1rem",

  "&>a": {
    color: "inherit",
    textDecoration: "none",
    transition: "all ease 1s",
  },

  "&:hover>a": {
    color: colors.light,
  },
});

export const Menutitle = styled(`span`)({
  color: "inherit",
});
