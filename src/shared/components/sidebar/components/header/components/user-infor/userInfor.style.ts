import colors from "@Shared/style/palette.scss";
import { styled } from "@mui/material/styles";
export const UserInforContainer = styled(`div`)({
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  borderRadius: "31.25rem",
  backgroundColor: colors.primary,
  cursor: "pointer",
  "&:hover": {
    background: colors.bgGrey,
  },
});

export const UserAvtWrapper = styled(`div`)({
  width: "1.75rem",
  height: "1.75rem",
  objectFit: "cover",
  overflow: "hidden",
  borderRadius: "50%",
  marginRight: "0.5rem",
});
