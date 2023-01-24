/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    loader: 'custom',
    loaderFile: './icon'
  }
}

module.exports = nextConfig
