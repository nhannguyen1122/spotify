import { styled } from "@mui/material/styles";
import colors from "@Shared/style/palette.scss";

export const PlaylistContainer = styled(`div`)({});

export const PlaylistListContainer = styled(`ul`)({
  height: "100%",
  padding: 0,
  margin: 0,
  overflowX: "hidden",
  overflowY: "auto",
});

export const PlayListItems = styled(`li`)({
  marginRight: "1rem",
  marginBottom: "0.5rem",
  color: "inherit",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",

  "&:hover": {
    color: colors.light,
  },
});
