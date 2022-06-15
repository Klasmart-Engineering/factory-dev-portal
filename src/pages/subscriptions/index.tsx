import Grid from '@mui/material/Grid';
import { ReactElement } from 'react';
import HealthCard from 'src/components/cards/HealthCard';
import SubscriptionCard from 'src/components/cards/SubscriptionCard';
import SubscriptionUsageReportCard from 'src/components/cards/SubscriptionUsageReportCard';
import LayoutWrapper from 'src/components/layout/LayoutWrapper';

export default function SubscriptionsPage () {

    const cards: JSX.Element[] = [
        <HealthCard key={`health-card`} />,
        <SubscriptionCard key={`subscription-card`} />,
        <SubscriptionUsageReportCard key={`subscription-usage-report-card`} />,
    ];

    return (
        <Grid
            container
            spacing={2}
        >
            {cards.map((item)=>{
                return (
                    <Grid
                        key={item.key}
                        item
                        xs={12}
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
