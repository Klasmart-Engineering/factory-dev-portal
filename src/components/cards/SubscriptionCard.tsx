import CardWrapper from '../layout/CardWrapper';
import { useGetSubscription } from '@kl-engineering/factory-subscriptions-api-client';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

export default function SubscriptionCard () {
    const {
        data,
        isFetching,
        error,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        refetch,
    } = useGetSubscription({
        subscriptionId: `123`,
    });

    return (
        <CardWrapper
            title={`Subscription`}
        >
            <>
                {
                    isFetching && !error && (
                        <>
                            <Skeleton animation="wave" />
                            <Skeleton animation="wave" />
                            <Skeleton animation="wave" />
                            <Skeleton animation="wave" />
                        </>
                    )
                }
                {
                    !isFetching && !error &&
                    <>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            <strong>Account id:</strong> {data?.account_id}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            <strong>Created on:</strong> {data?.created_on}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            <strong>State:</strong> {data?.state}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            <strong>Subscription id:</strong> {data?.subscription_id}
                        </Typography>
                    </>
                }
                {
                    !isFetching && error &&
                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    uh oh, this was not supposed to happen
                </Typography>
                }
            </>
        </CardWrapper>
    );
}
