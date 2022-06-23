
import {
    useGetSubscriptionUsageReportById,
    usePatchSubscriptionUsageReportById,
} from '@kl-engineering/factory-subscriptions-api-client';
import { UsageReportState } from '@kl-engineering/factory-subscriptions-api-client/dist/api/usage';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { useEffect } from "react";

interface Props {
    id: string;
}

export default function ReportContent (props: Props) {
    const { id } = props;

    const {
        data: reportData,
        isFetching: isFetchingReportData,
        error: errorReportData,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        refetch: reportDataRefetch,
    } = useGetSubscriptionUsageReportById({
        subscriptionId: `123`,
        usageReportId: id,
    });

    const {
        isFetching: isFetchingPatchReport,
        error: patchReportError,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        refetch: patchReportRefetch,
    } = usePatchSubscriptionUsageReportById({
        subscriptionId: `123`,
        usageReportId: id,
        state: UsageReportState.PROCESSING,
    }, {
        queryOptions: {
            enabled: false,
        },
    });

    useEffect(() => {
        if(isFetchingPatchReport) return;
        if(reportData?.state !== UsageReportState.NOT_REQUESTED) return;

        patchReportRefetch();
    }, [
        isFetchingPatchReport,
        patchReportRefetch,
        reportData,
    ]);

    useEffect(() => {
        if(isFetchingReportData) return;
        if(!reportData?.state) return;
        if(reportData.state === UsageReportState.NOT_REQUESTED) return;
        if(reportData.state === UsageReportState.READY) return;

        reportDataRefetch();
    }, [
        isFetchingReportData,
        reportDataRefetch,
        reportData,
    ]);

    return (
        <>
            {
                isFetchingReportData && !errorReportData && (<Skeleton animation="wave" />)
            }
            {
                !isFetchingReportData && !errorReportData &&
                    <>
                        {reportData?.state === UsageReportState.READY &&
                        <>
                            {reportData?.id &&
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                <strong>id:</strong> {reportData.id}
                            </Typography>
                            }
                            {reportData?.from &&
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                <strong>from:</strong> {reportData.from}
                            </Typography>
                            }
                            {reportData?.to &&
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                <strong>to:</strong> {reportData.to}
                            </Typography>
                            }
                            {reportData?.report_completed_at &&
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                <strong>completed at:</strong> {reportData.report_completed_at}
                            </Typography>
                            }
                            {reportData?.products &&
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                <strong>products:</strong> {Object.getOwnPropertyNames(reportData.products)
                                    .join(`,`)}
                            </Typography>
                            }
                        </>
                        }
                        {(!patchReportError && (reportData?.state === UsageReportState.NOT_REQUESTED || reportData?.state === UsageReportState.PROCESSING)) &&
                            <div>Processing...</div>
                        }
                        {(patchReportError && (reportData?.state === UsageReportState.NOT_REQUESTED || reportData?.state === UsageReportState.PROCESSING)) &&
                            <Button
                                variant="contained"
                                onClick={()=>patchReportRefetch()}
                            >
                                Refetch
                            </Button>
                        }
                    </>
            }
            {
                !isFetchingReportData && errorReportData &&
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
