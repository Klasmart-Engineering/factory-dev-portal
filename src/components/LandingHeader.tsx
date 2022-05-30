import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Image,
{ ImageLoaderProps } from 'next/image';
import { useRouter } from 'next/router';

export default function LandingHeader () {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/subscriptions`, undefined, {
            shallow: true,
        });
    };

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

                    <Button
                        variant="outlined"
                        sx={{
                            color: `white`,
                            borderColor: `white`,
                            // eslint-disable-next-line @typescript-eslint/naming-convention
                            ":hover": {
                                color: `primary.light`,
                                borderColor: `primary.light`,
                            },
                        }}
                        onClick={handleClick}
                    >
                                    Sign in
                    </Button>

                </Box>
            </Container>
        </Box>
    );
}
