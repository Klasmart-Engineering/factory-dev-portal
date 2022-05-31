const rewrites = () => {
    return [
        {
        source: "/subscriptions/__health",
        destination: `${process.env.SUBSCRIPTIONS_ENDPOINT}/__health`,
        },
    ];
};


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: "custom" 
    },
    rewrites: rewrites
    
};

module.exports = nextConfig;