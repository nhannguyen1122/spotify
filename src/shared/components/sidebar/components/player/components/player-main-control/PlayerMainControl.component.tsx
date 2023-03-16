import React from "react";
import {
  PlayerActionWrapper,
  PlayerMainControlContainer,
  PlayerSlider,
  PlayerSliderWrapper,
} from "./playerMainControl.style";
import AppButton from "@/shared/components/button/Button.component";
import { Box, Slider, Stack, Typography } from "@mui/material";

function PlayerMainControl() {
  const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <PlayerMainControlContainer>
      <PlayerActionWrapper>
        <AppButton isIcon icon="shuffle" />
        <AppButton isIcon icon="previous" />

        <AppButton isIcon icon="play" />

        <AppButton isIcon icon="next" />

        <AppButton isIcon icon="loop" />
      </PlayerActionWrapper>

      <PlayerSliderWrapper sx={{ width: 400 }}>
        <Typography>0:07</Typography>
        <PlayerSlider>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <Slider aria-label="Volume" value={value} onChange={handleChange} />
          </Stack>
        </PlayerSlider>
        <Typography>1:00</Typography>
      </PlayerSliderWrapper>
    </PlayerMainControlContainer>
  );
}

export default PlayerMainControl;
