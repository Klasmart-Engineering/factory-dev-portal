/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetHealth } from '@kl-engineering/factory-subscriptions-api-client/dist/api/health';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { ReactElement } from 'react';
import Layout from 'src/components/Layout';

export default function MorePage () {

    const {
        data,
        isFetching,
        error,
        refetch,
    } = useGetHealth({});

    return (
        <Card>
            <Box>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </Box>
        </Card>
    );
}

MorePage.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};
