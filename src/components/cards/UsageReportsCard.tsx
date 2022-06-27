import ReportContentRow from '../card-content/ReportContentRow';
import CardWrapper from '../layout/CardWrapper';
import { useGetSubscriptionUsageReports } from '@kl-engineering/factory-subscriptions-api-client';
import Skeleton from '@mui/material/Skeleton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

export default function UsageReportsCard () {

    const {
        data,
        isFetching,
        error,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        refetch: usageReportsRefetch,
    } = useGetSubscriptionUsageReports({
        subscriptionId: `1966f368-5528-4591-99d1-3c475a02b1f5`,
    });

    const rows = data ?? [];

    return (
        <CardWrapper
            title={`Reports`}
        >
            <>
                {
                    isFetching && !error && (<Skeleton animation="wave" />)
                }
                {
                    !isFetching && !error &&
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell>ID</TableCell>
                                <TableCell align="left">From</TableCell>
                                <TableCell align="left">To</TableCell>
                                <TableCell />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <ReportContentRow
                                    key={row.id}
                                    row={{
                                        id: row.id,
                                        from: row.from,
                                        to: row.to,
                                    }}
                                />
                            ))}
                        </TableBody>
                    </Table>
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
