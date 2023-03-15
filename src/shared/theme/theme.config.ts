import colors from "@Shared/style/palette.scss";
import texts from "@Shared/style/typography.scss";
import { PaletteOptions } from "@mui/material";
import { IThemeColor } from "./theme.interface";

function componentObjConfig<T>(root: T) {
  return {
    styleOverrides: {
      root,
    },
  };
}

export function themeTypography(theme: any): any {
  return {};
}

export function themePalette<T extends { [key: string]: string } | IThemeColor>(
  themeColor: T
): PaletteOptions {
  return {
    primary: {
      main: themeColor.primary,
    },
    secondary: {
      main: themeColor.secondary,
    },
    success: {
      main: themeColor.success,
    },
  };
}

export function themeOveride() {
  const color = colors;
  const text = texts;
  return {
    //paper
    MuiPaper: componentObjConfig({
      backgroundColor: color.darkCard,
    }),

    //typography
    MuiTypography: componentObjConfig({
      color: color.lightText,
    }),
  };
}
