import React, { useState } from "react";
import Logo from "@/asserts/svg/logo.svg";
import colors from "@Shared/style/palette.scss";

import {
  LogoContainer,
  MenuDividerSx,
  MenuLinkContainer,
  MenuLinkWrapper,
  menuIconSx,
  Menutitle,
} from "./bigMenu.style";
import { bigMainMenuConfig } from "./bigMenu.config";
import { Link, LinkProps } from "react-router-dom";
import { IMenuData } from "./bigMenu.interface";
import AppButton from "@/shared/components/button/Button.component";
import { Divider } from "@mui/material";

function BigMenu() {
  const [activeIndex, setActive] = useState<number>(0);

  const renderMainMenu = () => {
    return bigMainMenuConfig.map((section, id) => {
      return (
        <MenuLinkWrapper
          sx={
            id === bigMainMenuConfig.length
              ? {
                  marginBottom: "1rem",
                }
              : {}
          }
          key={id}
        >
          {renderMenu(section.config)}
        </MenuLinkWrapper>
      );
    });
  };

  const renderMenu = (menu: IMenuData[]) => {
    return menu.map((item, index) => {
      return (
        <MenuLinkContainer
          onClick={() => setActive(item.id)}
          sx={
            activeIndex === item.id
              ? {
                  background: colors.bgGrey,
                  borderRadius: "0.25rem",
                  transition: "all ease 1s",
                }
              : {}
          }
        >
          <Link key={index} to={item.redirectPath}>
            <AppButton
              className="menu-icon"
              sx={menuIconSx}
              isIcon
              icon={item.icon}
            />
            <Menutitle
              sx={activeIndex === item.id ? { color: colors.light } : {}}
            >
              {item.title}
            </Menutitle>
          </Link>
        </MenuLinkContainer>
      );
    });
  };

  return (
    <React.Fragment>
      <LogoContainer>
        <img src={Logo} alt="logo" />
      </LogoContainer>

      <div>{renderMainMenu()}</div>
      <Divider sx={MenuDividerSx} />
    </React.Fragment>
  );
}

export default BigMenu;
