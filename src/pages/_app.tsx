import '../styles/globals.css';
import { ReactQueryDevtools as SubscriptionsReactQueryDevtools } from "@kl-engineering/factory-subscriptions-api-client";
import { ThemeProvider } from '@mui/material/styles';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type {
    ReactElement,
    ReactNode,
} from 'react';
import SubscriptionsApiClientProvider from 'src/providers/SubscriptionsApiClientProvider';
import { useTheme } from 'src/utils/theme';

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function MyApp ({ Component, pageProps }: AppPropsWithLayout) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page);

    return getLayout((
        <SubscriptionsApiClientProvider>
            <ThemeProvider theme={useTheme()}>
                <Component {...pageProps} />
            </ThemeProvider>
            {process.env.NODE_ENV === `development` && <SubscriptionsReactQueryDevtools position="bottom-left" />}
        </SubscriptionsApiClientProvider>
    ));
}
