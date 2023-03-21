import React from "react";
import {
  PlayerDesIcon,
  PlayerDesImg,
  PlayerDescriptionContainer,
  PlayerDesription,
  TitleDesTypoSx,
  SongNameSx,
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
        <Typography variant="body2" sx={TitleDesTypoSx}>
          Lullaby
        </Typography>
        <SongNameSx>
          Lullaby Lullaby Lullaby Lullaby Lullaby Lullaby Lullaby Lullaby
        </SongNameSx>
      </PlayerDesription>
      <PlayerDesIcon>
        <AppButton isIcon icon="heart"></AppButton>
        <AppButton isIcon icon="pip"></AppButton>
      </PlayerDesIcon>
    </PlayerDescriptionContainer>
  );
}

export default PlayerDescription;
