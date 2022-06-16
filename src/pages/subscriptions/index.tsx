import Grid from '@mui/material/Grid';
import { ReactElement } from 'react';
import HealthCard from 'src/components/cards/HealthCard';
import SubscriptionCard from 'src/components/cards/SubscriptionCard';
import UsageReportsCard from 'src/components/cards/UsageReportsCard';
import LayoutWrapper from 'src/components/layout/LayoutWrapper';

export default function SubscriptionsPage () {

    const cards: JSX.Element[] = [
        <HealthCard key={`health-card`} />,
        <SubscriptionCard key={`subscription-card`} />,
        <UsageReportsCard key={`usage-reports-card`} />,
    ];

    return (
        <Grid
            container
            direction={`column`}
            flexWrap={`nowrap`}
        >
            {cards.map((item)=>{
                return (
                    <Grid
                        key={item.key}
                        item
                    >
                        {item}
                    </Grid>
                );
            })}
        </Grid>
    );
}

SubscriptionsPage.getLayout = (page: ReactElement) => {
    return <LayoutWrapper>{page}</LayoutWrapper>;
};
