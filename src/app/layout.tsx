import { StoreProvider } from "@/components/StoreProvider";
import { MainAppBar } from "../components/MainAppBar";
import theme from "@/theme";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Meal Master",
  description:
    "Din personlige kokebok med full kontroll på kalorier og næringsinnhold. Planlegg måltider og handlelister.",
};

interface IProps {
  children: ReactNode;
}

const RootLayout = ({ children }: IProps) => {
  return (
    <html lang="no" className={roboto.variable}>
      <body>
        <StoreProvider>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <MainAppBar />
              <Container>{children}</Container>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
