import colors from "@Shared/style/palette.scss";
import { styled } from "@mui/material/styles";
import { keyframes } from "@emotion/react";

export const TitleDesTypoSx = {
  color: colors.light,
};

const myKeyframe = keyframes`
  0%{
   transform: translateX(0);
 },
  100%{
   
   transform: translateX(-100%);
 }
`;

export const SongNameSx = styled(`div`)({
  transform: "translateX(100%)",
  animation: `${myKeyframe} 5s infinite ease`,
  lineHeight: "2.06rem",
  paddingBottom: 0,
  whiteSpace: "nowrap",
});

export const PlayerDescriptionContainer = styled(`div`)({
  display: "flex",
  alignItems: "space-between",
});

export const PlayerDesImg = styled(`div`)({
  width: "3.5rem",
  height: "3.5rem",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
});

export const PlayerDesription = styled(`div`)({
  marginLeft: "1rem",
  width: "11.25rem",
  overflow: "hidden",
});

export const PlayerDesIcon = styled(`div`)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const PlayerDescriptionContainer16 = styled(`div`)({});
export const PlayerDescriptionContainer17 = styled(`div`)({});
