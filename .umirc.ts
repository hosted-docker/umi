export default {
  favicons: [
    'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
  ],
  mfsu: false,
  routePrefetch: {},
  manifest: {},
  base: '/mirror/umi-next',
  publicPath: '/mirror/umi-next/',
  plugins: ['@umijs/plugin-docs'],
  conventionRoutes: {
    exclude: [/\/components\//],
  },
};
