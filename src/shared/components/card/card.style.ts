import colors from "@Shared/style/palette.scss";
import { styled } from "@mui/material/styles";

const cardTransition = { transition: "all ease 1s" };

const ellipsisText = {
  overflow: "hidden",
  textOverflow: "ellipsis",
};

export const cardVerticalContainer = {
  width: "inherit",
  height: "17rem",
};

export const CardContainer = styled(`div`)({
  position: "relative",
  cursor: "pointer",

  "&:hover > .card-container": {
    background: colors.bgGrey,
    ...cardTransition,
  },

  "&:hover > .play-button": {
    /**visible */
    visibility: "visible",
    opacity: 1,
    transition: " visibility 0s, opacity 0.5s linear",
  },
});

export const CardPlayButonVerticalSx = {
  position: "absolute",
  fontSize: "2.5rem",
  right: "15px",
  top: "115px",
  /**hidden */
  visibility: "hidden",
  opacity: 0,

  "&:hover": {
    transform: "scale(1.1)",
    ...cardTransition,
  },
};

export const CartTitleSx = {
  width: "100%",
  marginBottom: "2px",
  whiteSpace: "nowrap",
  ...ellipsisText,
};

export const CartDescriptionSx = {
  width: "100%",
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  lineHeight: 1.4,
  fontSize: "0.875rem",
  ...ellipsisText,
};

export const ImageContainer = styled(`div`)({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  overflow: "hidden",
  borderRadius: "4px",
});

export const DescriptionContainer = styled("div")({
  margin: "10px",
  width: "100%",
});

export const HorizontalContainer = styled("div")({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexWrap: "nowrap",
});
