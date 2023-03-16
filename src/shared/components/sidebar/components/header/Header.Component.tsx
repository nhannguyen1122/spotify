import AppButton from "@/shared/components/button/Button.component";
import React from "react";
import {
  AppHeaderContainer,
  NavigateWrapper,
  UserInfoWrapper,
} from "./header.style";
import AppUserInfor from "./components/user-infor/UserInfor.component";

function AppHeader() {
  return (
    <AppHeaderContainer>
      <NavigateWrapper>
        <AppButton isIcon icon="previous" />

        <AppButton isIcon icon="next" />
      </NavigateWrapper>

      <UserInfoWrapper>
        <AppButton>Nâng cấp</AppButton>

        <AppUserInfor></AppUserInfor>
      </UserInfoWrapper>
    </AppHeaderContainer>
  );
}
export default AppHeader;
