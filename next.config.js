const NextFederationPlugin = require('@module-federation/nextjs-mf');


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // trailingSlash: true,
  basePath: '/app1',
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'app1',
        filename: 'static/chunks/remoteEntry.js',
        shared: {
          // whatever else
        },
        remotes: {
          main: `main@${process.env.main}/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        extraOptions: {
          exposePages: true
        },
        exposes: {
          "./button": "./src/components/button.tsx",
          "./tokenStuff": "./src/components/token-stuff.tsx",
        }
      })
    );

    return config;
  },
}

module.exports = nextConfig
