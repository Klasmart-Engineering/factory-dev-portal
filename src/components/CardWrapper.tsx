import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';

export type BaseCardProps = {
    children: React.ReactNode;
    title?: string;
}

export default function CardWrapper (props: BaseCardProps) {

    const {
        children,
        title,
    } = props;

    return (
        <Card>
            <CardContent>
                { title &&
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                >
                    {title}
                </Typography>
                }
                {children}
            </CardContent>
        </Card>
    );
}
