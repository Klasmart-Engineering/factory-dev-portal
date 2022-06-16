
import { useGetSubscriptionUsageReportById } from '@kl-engineering/factory-subscriptions-api-client';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

interface Props {
    id: string;
}

export default function ReportContent (props: Props) {
    const { id } = props;

    const {
        data,
        isFetching,
        error,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        refetch,
    } = useGetSubscriptionUsageReportById({
        subscriptionId: `123`,
        usageReportId: id,
    });

    return (
        <>
            {
                isFetching && !error && (<Skeleton animation="wave" />)
            }
            {
                !isFetching && !error &&
                    <>
                        {data?.id &&
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                <strong>id:</strong> {data.id}
                            </Typography>
                        }
                        {data?.from &&
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                <strong>from:</strong> {data.from}
                            </Typography>
                        }
                        {data?.to &&
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                <strong>to:</strong> {data.to}
                            </Typography>
                        }
                        {data?.report_completed_at &&
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                <strong>completed at:</strong> {data.report_completed_at}
                            </Typography>
                        }
                        {data?.state &&
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                <strong>state:</strong> {data.state}
                            </Typography>
                        }
                        {data?.products &&
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                <strong>products:</strong> {JSON.stringify(data.products, null, 2)}
                            </Typography>
                        }
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
    );
}
