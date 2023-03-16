import styled from "@emotion/styled";
import colors from "@Shared/style/palette.scss";

export const iconSx = {
  color: colors.lightUnhover,
  "&:hover": {
    color: colors.light,
    transform: "scale(1.2)",
    transition: "all ease 0.5s",
  },
};

export const ButtonIconWrapper = styled(`span`)({
  display: "flex",
  justifyContent: "center",
  fontSize: "1rem",
  marginRight: "0.5rem",
});
