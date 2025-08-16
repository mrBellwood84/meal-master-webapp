import { ReactNode } from 'react';
import { roboto } from '@/styles/fonts';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@/styles/theme';
import type { Metadata } from 'next';
import { MainAppBar } from '@/components/ui/MainAppBar';
import '../styles/global.css';
import { StoreProvider } from '@/store/StoreProvider';

interface IProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'Smaklyst',
  description:
    'Din personlige kokebok med full kontroll på kalorier og næringsinnhold. Planlegg måltider og handlelister.',
};

const RootLayout = ({ children }: IProps) => {
  return (
    <html lang="no" className={roboto.variable}>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <StoreProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <MainAppBar />
              <Container>{children}</Container>
            </ThemeProvider>
          </StoreProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
