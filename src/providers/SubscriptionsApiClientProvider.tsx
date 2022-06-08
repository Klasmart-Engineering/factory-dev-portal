
import { SubscriptionsApiClientProvider as KlSubscriptionsApiClientProvider } from "@kl-engineering/factory-subscriptions-api-client";
import React from "react";

interface Props {
    children: React.ReactNode;
}

export default function SubscriptionsApiClientProvider (props: Props) {
    const { children } = props;

    const STALE_TIME = 60 * 1000; // 60 seconds
    const SUBSCRIPTIONS_ENDPOINT = process.env.NEXT_PUBLIC_SUBSCRIPTIONS_ENDPOINT;
    const SUBSCRIPTIONS_REQUEST_RETRY_COUNT_MAX = +(process.env.NEXT_PUBLIC_SUBSCRIPTIONS_REQUEST_RETRY_COUNT_MAX ?? 1);

    return (
        <KlSubscriptionsApiClientProvider
            config={{
                baseURL: SUBSCRIPTIONS_ENDPOINT,
            }}
            queryOptions={{
                defaultOptions: {
                    queries: {
                        staleTime: STALE_TIME,
                        retry: SUBSCRIPTIONS_REQUEST_RETRY_COUNT_MAX,
                    },
                },
            }}
        >
            {children}
        </KlSubscriptionsApiClientProvider>
    );
}
