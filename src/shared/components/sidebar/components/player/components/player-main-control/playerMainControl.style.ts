import colors from "@Shared/style/palette.scss";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PlayerMainControlContainer = styled(`div`)({});

export const PlayerActionWrapper = styled(`div`)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const PlayerSliderWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const PlayerSlider = styled(`div`)({
  flex: 2,
  margin: "auto 1rem",
  paddingTop: "0.6rem",
  color: colors.light,
  "& .MuiSlider-thumb": {
    borderRadius: "1px",
    display: "none",
  },
});
