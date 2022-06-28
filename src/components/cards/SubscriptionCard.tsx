import SubscriptionContentState from '../card-content/SubscriptionContentState';
import CardWrapper from '../layout/CardWrapper';
import {
    useGetSubscription,
    usePatchSubscription,
} from '@kl-engineering/factory-subscriptions-api-client';
import { SubscriptionState } from '@kl-engineering/factory-subscriptions-api-client/dist/api/subscription';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import {
    useEffect,
    useState,
} from 'react';

export default function SubscriptionCard () {
    const [ state, setState ] = useState(SubscriptionState.DISABLED);

    const {
        data: subscriptionData,
        isFetching: isFetchingSubscription,
        error: subscriptionError,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        refetch: refetchSubscriptionData,
    } = useGetSubscription({
        subscriptionId: `1966f368-5528-4591-99d1-3c475a02b1f5`,
    });

    const {
        data: patchSubscriptionData,
        isFetching: isFetchingPatchData,
        error: patchError,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        refetch: patchSubscriptionRefetch,
    } = usePatchSubscription({
        subscriptionId: `1966f368-5528-4591-99d1-3c475a02b1f5`,
        state: state,
    }, {
        queryOptions: {
            enabled: false,
        },
    });

    useEffect(() => {
        if (isFetchingSubscription) return;
        if (subscriptionError) return;
        if (!subscriptionData?.state) return;

        setState(subscriptionData.state);
    }, [
        subscriptionData,
        isFetchingSubscription,
        subscriptionError,
    ]);

    useEffect(() => {
        if (isFetchingPatchData) return;
        if (patchError) return;

        refetchSubscriptionData();
    }, [ isFetchingPatchData, patchSubscriptionRefetch ]);

    const handleStateChange = () => {
        patchSubscriptionRefetch();
    };

    return (
        <CardWrapper
            title={`Subscription`}
        >
            <>
                {
                    isFetchingSubscription && !subscriptionError && (
                        <>
                            <Skeleton animation="wave" />
                            <Skeleton animation="wave" />
                            <Skeleton animation="wave" />
                            <Skeleton animation="wave" />
                        </>
                    )
                }
                {
                    !isFetchingSubscription && !subscriptionError &&
                    <>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            <strong>Account id:</strong> {subscriptionData?.account_id}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            <strong>Created on:</strong> {subscriptionData?.created_on}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            <strong>Subscription id:</strong> {subscriptionData?.id}
                        </Typography>
                        {subscriptionData?.state &&
                            <>
                                <Divider sx={{
                                    marginTop: 2,
                                }}
                                />
                                <SubscriptionContentState
                                    state={subscriptionData.state}
                                    onChangeState={handleStateChange}
                                />
                            </>
                        }
                    </>
                }
                {
                    !isFetchingSubscription && subscriptionError &&
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
