import React, { useEffect, useState } from "react";
import {
  ButtonMode,
  IButton,
} from "@Shared/components/button/button.interface";
import Button, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import iconMap from "@/asserts/icon/Icon.config";
import IconButton from "@mui/material/IconButton";
import { IconProps } from "@mui/material";
import { ButtonIconWrapper, iconSx } from "./button.style";

function AppButton({
  isIcon = false,
  icon,
  size = "medium",
  className,
  ...props
}: IButton &
  Omit<MuiButtonProps, keyof IButton> &
  Omit<IconProps, keyof IButton>) {
  const [btnType, setBtnType] = useState<ButtonMode>(ButtonMode.BUTTON);

  useEffect(() => {
    if (isIcon) {
      setBtnType(ButtonMode.ICON);
    } else {
      setBtnType(ButtonMode.BUTTON);
    }
  }, [isIcon]);

  const renderButton = () => {
    return (
      <Button size={size} {...props}>
        <ButtonIconWrapper>{icon && iconMap[icon]}</ButtonIconWrapper>
        {props?.children}
      </Button>
    );
  };

  const renderIcon = () => {
    return (
      <IconButton
        className={className}
        sx={{ ...iconSx, ...props }}
        size={size}
        {...props}
      >
        {isIcon && icon && iconMap[icon]}
      </IconButton>
    );
  };

  const appBtnMap = {
    [ButtonMode.BUTTON]: renderButton,
    [ButtonMode.ICON]: renderIcon,
  };

  return <React.Fragment>{appBtnMap[btnType]()}</React.Fragment>;
}

export default AppButton;
