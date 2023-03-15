import { Button, Switch } from "@mui/material";
import React from "react";

const label = { inputProps: { "aria-label": "Switch demo" } };

function Home() {
  return (
    <div>
      this is home
      <Button color="primary" variant="text">
        Text
      </Button>
      <Button color="secondary" variant="contained">
        Contained
      </Button>
      <Button color="success" variant="outlined">
        Outlined
      </Button>
      <Switch color="success" {...label} defaultChecked />
    </div>
  );
}

export default Home;
