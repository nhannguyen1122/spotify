import React from "react";
import {
  PlayerDesIcon,
  PlayerDesImg,
  PlayerDescriptionContainer,
  PlayerDesription,
} from "./playerDescription.style";
import TestImage from "@/asserts/image/test.jpg";
import { Card, Container, Grid, Typography } from "@mui/material";
import AppButton from "@/shared/components/button/Button.component";

function PlayerDescription() {
  return (
    <PlayerDescriptionContainer>
      <PlayerDesImg>
        <img src={TestImage} alt="playing song" />
      </PlayerDesImg>

      <PlayerDesription>
        <Typography variant="h6">Lullaby</Typography>
        <Typography variant="h6">Lullaby</Typography>
      </PlayerDesription>
      <PlayerDesIcon>
        <AppButton isIcon icon="heart"></AppButton>
        <AppButton isIcon icon="pip"></AppButton>
      </PlayerDesIcon>
    </PlayerDescriptionContainer>
  );
}

export default PlayerDescription;
