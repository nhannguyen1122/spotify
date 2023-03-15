import AppButton from "@/shared/components/button/Button.component";
import AppCard from "@/shared/components/card/Card.component";
import { Typography } from "@mui/material";
import React from "react";

export function TestComponent() {
  return (
    <React.Fragment>
      <AppButton isIcon icon="home" />

      <AppButton color="success" variant="contained">
        SEARCH
      </AppButton>
      <br />
      <br />
      <br />
      <br />
      <br />
      <AppCard>
        <Typography>aaa</Typography>
      </AppCard>

      <AppCard
        direction="vertical"
        title=" Dayli Remix 1"
        description="Hardwell Avicii and more Famouse dj"
      />
      <AppCard
        direction="vertical"
        title="hello"
        description="hda dahd ah dadh s"
      />
    </React.Fragment>
  );
}
