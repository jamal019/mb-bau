import type { NextConfig } from 'next';

const isGithubPagesBuild = process.env.GITHUB_ACTIONS === 'true';
const repoName = 'mb-bau';
const basePath = isGithubPagesBuild ? `/${repoName}` : '';

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  basePath,
  assetPrefix: isGithubPagesBuild ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp']
  }
};

export default nextConfig;
