import { createTheme as createMuiTheme, PaletteMode } from "@mui/material";

export const createTheme = (mode: PaletteMode) => {
  const theme = createMuiTheme({
    palette: {
      mode,
    },
  });

  return createMuiTheme(theme, {
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            [theme.breakpoints.up("xs")]: {
              width: "80%",
            },
            [theme.breakpoints.up("sm")]: {
              width: "70%",
            },
            [theme.breakpoints.up("xl")]: {
              width: "50%",
            },
          },
        },
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            ":before": {
              display: "none",
            },
          },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            ":last-child": {
              paddingBottom: 16,
            },
          },
        },
      },
    },
  });
};
