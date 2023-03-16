import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import colors from "@Shared/style/palette.scss";

export const OtherControlContainer = styled(`div`)({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});

export const OtherControlVolumne = styled(Box)({
  flex: 2,
  margin: "auto 1rem",
  paddingTop: "0.6rem",
  color: colors.light,
  "& .MuiSlider-thumb": {
    borderRadius: "1px",
    display: "none",
  },
});
