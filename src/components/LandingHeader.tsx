import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image,
{ ImageLoaderProps } from 'next/image';
import { ReactElement } from 'react';

export default function LandingHeader () {

    const imageLoader = (resolverProps: ImageLoaderProps) => {
        return `https://kidsloop.net/${resolverProps.src}`;
    };

    return (
        <Box
            component="header"
            padding={2}
            position="absolute"
            width={`100%`}
        >
            <Container
                maxWidth="lg"
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Image
                        loader={imageLoader}
                        src="wp-content/uploads/2021/08/kidsloop.svg"
                        alt="kidsloop logo"
                        width={200}
                        height={100}
                    />
                </Box>
            </Container>
        </Box>
    );
}
