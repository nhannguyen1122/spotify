import AppButton from "@/shared/components/button/Button.component";
import React from "react";
import {
  AppHeaderContainer,
  NavigateWrapper,
  UserInfoWrapper,
  upgradeBtnSx,
} from "./header.style";
import AppUserInfor from "./components/user-infor/UserInfor.component";

function AppHeader() {
  return (
    <AppHeaderContainer>
      <NavigateWrapper>
        <AppButton
          variant="outlined"
          color="primary"
          isIcon
          icon="back-forward"
        />

        <AppButton variant="contained" color="primary" isIcon icon="forward" />
      </NavigateWrapper>

      <UserInfoWrapper>
        <AppButton
          size="small"
          sx={upgradeBtnSx}
          variant="contained"
          color="primary"
        >
          Nâng cấp
        </AppButton>
        &nbsp; &nbsp;
        <AppUserInfor></AppUserInfor>
      </UserInfoWrapper>
    </AppHeaderContainer>
  );
}
export default AppHeader;
