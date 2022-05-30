import Box from '@mui/material/Box';
import grey from '@mui/material/colors/grey';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Image,
{ ImageLoaderProps } from 'next/image';
import Link from 'next/link';

export default function LandingFooter () {

    const imageLoader = (resolverProps: ImageLoaderProps) => {
        return `/${resolverProps.src}`;
    };

    return (
        <Box
            component="footer"
            p={8}
            bgcolor="whitesmoke"
        >
            <Container
                maxWidth="lg"
            >
                <Image
                    loader={imageLoader}
                    src="kidsloop-dark.svg"
                    alt="kidsloop logo"
                    width={100}
                    height={25}
                />
                <Box
                    paddingTop={2}
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    <Grid
                        container
                        spacing={2}
                    >
                        <Grid
                            item
                            sm={6}
                            xs={12}
                            md={4}
                        >
                            <List>
                                <ListItem
                                    disablePadding
                                >
                                    <Typography
                                        gutterBottom
                                        variant="body1"
                                        color={grey[600]}
                                    >
                                        Company
                                    </Typography>
                                </ListItem>
                                <ListItem disablePadding>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </ListItem>
                                <ListItem disablePadding>
                                    <Link
                                        passHref
                                        href="https://kidsloop.net/about-us-2/"
                                    >
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            About Us
                                        </a>
                                    </Link>
                                </ListItem>
                                <ListItem disablePadding>
                                    <Link href="/blog/hello-world">
                                        <a>Blog Post</a>
                                    </Link>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid
                            item
                            sm={6}
                            xs={12}
                            md={4}
                        >
                            <List>
                                <ListItem
                                    disablePadding
                                >
                                    <Typography
                                        gutterBottom
                                        variant="body1"
                                        color={grey[600]}
                                    >
                                        Developers
                                    </Typography>
                                </ListItem>
                                <ListItem disablePadding>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </ListItem>
                                <ListItem disablePadding>
                                    <Link href="/about">
                                        <a>About Us</a>
                                    </Link>
                                </ListItem>
                                <ListItem disablePadding>
                                    <Link href="/blog/hello-world">
                                        <a>Blog Post</a>
                                    </Link>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid
                            item
                            sm={6}
                            xs={12}
                            md={4}
                        >
                            <List>
                                <ListItem
                                    disablePadding
                                >
                                    <Typography
                                        gutterBottom
                                        variant="body1"
                                        color={grey[600]}
                                    >
                                        Others
                                    </Typography>
                                </ListItem>
                                <ListItem disablePadding>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </ListItem>
                                <ListItem disablePadding>
                                    <Link href="/about">
                                        <a>About Us</a>
                                    </Link>
                                </ListItem>
                                <ListItem disablePadding>
                                    <Link href="/blog/hello-world">
                                        <a>Blog Post</a>
                                    </Link>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Box>
                <Typography
                    gutterBottom
                    variant="body2"
                    display="block"
                    paddingTop={2}
                >
                    {`Copyright ⓒ ${new Date()
                        .getFullYear()} KidsLoop Co., Ltd. All rights reserved.`}
                </Typography>
            </Container>
        </Box>
    );
}
