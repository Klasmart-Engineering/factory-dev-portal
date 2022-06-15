import CardWrapper from '../layout/CardWrapper';
import { useGetSubscriptionUsageReports } from '@kl-engineering/factory-subscriptions-api-client';
import {
    grey,
    indigo,
} from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

interface Column {
    id: 'id' | 'from' | 'to';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
  }

const columns: Column[] = [
    {
        id: `id`,
        label: `ID`,
        minWidth: 170,
    },
    {
        id: `from`,
        label: `From`,
        minWidth: 100,
    },
    {
        id: `to`,
        label: `To`,
        minWidth: 170,
        align: `right`,
        // format: (value: number) => value.toLocaleString(`en-US`),
    },
];

export default function SubscriptionUsageReportCard () {
    const {
        data,
        isFetching,
        error,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        refetch,
    } = useGetSubscriptionUsageReports({
        subscriptionId: `123`,
    });

    const [ page, setPage ] = useState(0);
    const [ rowsPerPage, setRowsPerPage ] = useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <CardWrapper
            title={`Usage Reports`}
        >
            <>
                {
                    isFetching && !error && (<Skeleton animation="wave" />)
                }
                {
                    !isFetching && !error &&
                    <Paper sx={{
                        width: `100%`,
                    }}
                    >
                        <TableContainer sx={{
                            maxHeight: 300,
                        }}
                        >
                            <Table
                                stickyHeader
                                aria-label="sticky table"
                            >
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{
                                                    backgroundColor: indigo[400],
                                                    color: grey[50],
                                                    minWidth: column.minWidth,
                                                }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data?.reports
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row, index) => {
                                            return (
                                                <TableRow
                                                    key={`${row.id}-${index}`}
                                                    hover
                                                    role="checkbox"
                                                    tabIndex={-1}
                                                >
                                                    {columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            <TableCell
                                                                key={column.id}
                                                                align={column.align}
                                                            >
                                                                {column.format && typeof value === `number`
                                                                    ? column.format(value)
                                                                    : value}
                                                            </TableCell>
                                                        );
                                                    })}
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[
                                10,
                                25,
                                100,
                            ]}
                            component="div"
                            count={data?.reports ? data.reports.length : 0}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
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
