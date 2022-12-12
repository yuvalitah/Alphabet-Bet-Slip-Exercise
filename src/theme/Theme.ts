import { createTheme as createMuiTheme, PaletteMode } from "@mui/material";

export const createTheme = (mode: PaletteMode) =>
  createMuiTheme({
    palette: {
      mode,
    },
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            width: 240,
          },
        },
      },
    },
  });
