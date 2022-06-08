import { ReactElement } from 'react';
import HealthCard from 'src/components/HealthCard';
import Layout from 'src/components/Layout';

export default function SubscriptionsPage () {

    return (
        <HealthCard />
    );
}

SubscriptionsPage.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};
