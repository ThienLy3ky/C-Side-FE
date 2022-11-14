import PropTypes from "prop-types";
import { useMemo } from "react";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "./typography";
import Palette from "./palette";
export default function ThemeCustomization({ children }) {
  const themeTypography = Typography();
  const themePalette = Palette();
  const themeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          mobile: 480,
          sm: 768,
          md: 992,
          lg: 1266,
          xl: 1536,
        },
      },
      typography: themeTypography,
      palette: themePalette,
    }),
    [themeTypography, themePalette]
  );

  const themes = createTheme(themeOptions);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
ThemeCustomization.propTypes = {
  children: PropTypes.node,
};
