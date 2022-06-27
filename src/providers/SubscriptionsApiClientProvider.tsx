
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
                headers: {
                    Authorization: `Bearer eyJhbGciOiAiSFMyNTYiLCJ0eXAiOiAiSldUIn0.eyJzdWIiOiAic3ViLWJsYWJsYSIsIm5hbWUiOiAiU29tZWJvZHkiLCJpYXQiOiAxMjM0NTYsInN1YnNjcmlwdGlvbl9pZCI6ICIxOTY2ZjM2OC01NTI4LTQ1OTEtOTlkMS0zYzQ3NWEwMmIxZjUiLCJhbmRyb2lkX2lkIjogIjA3ZmYwMGU0LWMxYTUtNDY4My05ZmNiLTYxM2E3MzRkOGQzZiIsICJhY2NvdW50X2lkIjogIjUyYTQxZGI0LWEyMmYtNDk2Yi04ZTM2LTk0YzY0YWM4MzA1OSJ9.aW52YWxpZCBzaWduYXR1cmU`,
                },
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
