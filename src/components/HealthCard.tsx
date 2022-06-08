import CardWrapper from './CardWrapper';
import { useGetHealth } from '@kl-engineering/factory-subscriptions-api-client/dist/api/health';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

export default function HealthCard () {
    const {
        data,
        isFetching,
        error,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        refetch,
    } = useGetHealth({});

    return (
        <CardWrapper
            title={`Healthcheck`}
        >
            <>
                {
                    isFetching && !error && (<Skeleton animation="wave" />)
                }
                {
                    !isFetching && !error &&
                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    status: {data?.status}
                </Typography>
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
