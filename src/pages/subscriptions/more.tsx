import { Container } from '@mui/material';
import { ReactElement } from 'react';
import LayoutWrapper from 'src/components/layout/LayoutWrapper';

export default function MorePage () {

    return (
        <Container sx={{
            margin: 0,
        }}
        >
            <p>Just another page</p>
        </Container>
    );
}

MorePage.getLayout = (page: ReactElement) => {
    return <LayoutWrapper>{page}</LayoutWrapper>;
};
