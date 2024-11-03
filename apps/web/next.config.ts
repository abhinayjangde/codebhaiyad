import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns: [
        {
            hostname: "codebhaiya.s3.ap-south-1.amazonaws.com",
            protocol: "https"
        },
        {
            hostname: "i.ytimg.com",
            protocol: "https",
        },
        {
            hostname: "www.creative-tim.com",
            protocol: "https",
        }
    ],
}
};

export default nextConfig;
