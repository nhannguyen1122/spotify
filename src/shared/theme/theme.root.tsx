import {
  createTheme,
  PaletteOptions,
  ThemeOptions,
} from "@mui/material/styles";
import colors from "@Shared/style/palette.scss";
import {
  themePalette,
  themeTypography,
  themeOveride,
} from "@Shared/theme/theme.config";

function rootTheme(customize?: PaletteOptions) {
  const color = colors;
  const theme: ThemeOptions = {
    palette: themePalette(color),
    typography: themeTypography(color),
    components: themeOveride(),
  };
  return createTheme(theme);
}

export default rootTheme;
