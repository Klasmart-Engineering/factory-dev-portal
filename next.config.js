const rewrites = () => {
    return [
        {
            source: "/subscriptions/:path*",
            destination: `${process.env.SUBSCRIPTIONS_ENDPOINT}/:path*`,
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