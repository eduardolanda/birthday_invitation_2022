import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
      taco: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
      taco?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    mode: "dark",
  },
  status: {
    danger: orange[500],
    taco: "black",
  },
});
