import React from "react";
import {
  OtherControlContainer,
  OtherControlVolumne,
} from "./playerOtherControl.style";
import AppButton from "@/shared/components/button/Button.component";
import { Box, Slider, Stack, Typography } from "@mui/material";

function PlayerOtherControl() {
  const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };
  return (
    <OtherControlContainer>
      <AppButton isIcon icon="shuffle" />
      <AppButton isIcon icon="mic" />
      <AppButton isIcon icon="wait-list" />
      <AppButton isIcon icon="connect-other" />
      <AppButton isIcon icon="vol-down" />{" "}
      <OtherControlVolumne sx={{ width: 100 }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <Slider aria-label="Volume" value={value} onChange={handleChange} />
        </Stack>
      </OtherControlVolumne>
    </OtherControlContainer>
  );
}

export default PlayerOtherControl;
