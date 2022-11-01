import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { ReactNode } from "react";
import { useAppContext } from "../context/AppContext";
import { theme as ThemeConfig } from "../styles/theme";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  const { state } = useAppContext();

  const appTheme = createTheme({
    ...ThemeConfig,
    palette: { mode: state.theme },
  });

  return (
    <ThemeProvider theme={appTheme}>
      <Navbar />
      {children}
    </ThemeProvider>
  );
}
