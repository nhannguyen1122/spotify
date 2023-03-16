import React, {
  ElementRef,
  forwardRef,
  ForwardRefRenderFunction,
  Ref,
  RefObject,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Logo from "@/asserts/svg/logo.svg";
import colors from "@Shared/style/palette.scss";

import {
  LogoContainer,
  MenuDividerSx,
  MenuLinkContainer,
  MenuLinkWrapper,
  menuIconSx,
  Menutitle,
  BigMenuContainer,
} from "./bigMenu.style";
import { bigMainMenuConfig } from "./bigMenu.config";
import { Link, LinkProps } from "react-router-dom";
import { IBigMenu, IMenuData } from "./bigMenu.interface";
import AppButton from "@/shared/components/button/Button.component";
import { Divider } from "@mui/material";

function BigMenu({ id }: IBigMenu, ref: any) {
  const [activeIndex, setActive] = useState<number>(0);
  const bigMenuContainerRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        bigMenuContainerRef: () => bigMenuContainerRef,
      };
    },
    []
  );

  const renderMainMenu = () => {
    return bigMainMenuConfig.map((section, id) => {
      return (
        <React.Fragment key={id}>
          <MenuLinkWrapper
            sx={
              id === bigMainMenuConfig.length
                ? {
                    marginBottom: "1rem",
                  }
                : {}
            }
          >
            {renderMenu(section.config)}
          </MenuLinkWrapper>
        </React.Fragment>
      );
    });
  };

  const renderMenu = (menu: IMenuData[]) => {
    return menu.map((item, index) => {
      return (
        <React.Fragment key={index}>
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
            <Link to={item.redirectPath}>
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
        </React.Fragment>
      );
    });
  };

  return (
    <BigMenuContainer ref={bigMenuContainerRef}>
      <LogoContainer>
        <img src={Logo} alt="logo" />
      </LogoContainer>

      <div>{renderMainMenu()}</div>
      <Divider sx={MenuDividerSx} />
    </BigMenuContainer>
  );
}

export default forwardRef(BigMenu);
