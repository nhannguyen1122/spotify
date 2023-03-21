import React from "react";
import { UserAvtWrapper, UserInforContainer } from "./userInfor.style";
import { Card, Container, Grid, Typography } from "@mui/material";
import FAKE from "@/asserts/image/test.jpg";
import AppButton from "@/shared/components/button/Button.component";

function AppUserInfor() {
  return (
    <UserInforContainer>
      <UserAvtWrapper>
        <img alt="avt" src={FAKE} />
      </UserAvtWrapper>
      <Typography>Nguyễn Nhân</Typography>

      <AppButton isIcon icon="down" size="small" color="secondary" />
    </UserInforContainer>
  );
}

export default AppUserInfor;
