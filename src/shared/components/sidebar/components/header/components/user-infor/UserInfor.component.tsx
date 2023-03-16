import React from "react";
import { UserAvtWrapper, UserInforContainer } from "./userInfor.style";
import { Card, Container, Grid, Typography } from "@mui/material";

function AppUserInfor() {
  return (
    <UserInforContainer>
      <UserAvtWrapper>
        <img alt="avt" src="" />
      </UserAvtWrapper>
      <Typography>Nguyễn Nhân</Typography>
    </UserInforContainer>
  );
}

export default AppUserInfor;
