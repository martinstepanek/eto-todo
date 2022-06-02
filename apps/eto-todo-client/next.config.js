const { withSentryConfig } = require('@sentry/nextjs');
const withTM = require('next-transpile-modules')(['ui']);

const moduleExports = withTM({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  sentry: {
    disableServerWebpackPlugin: true,
    disableClientWebpackPlugin: true,
  },
  env: {
    NEXT_PUBLIC_SENTRY_DSN: '',
    NEXT_PUBLIC_API_URL: 'http://localhost:4000/graphql',
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: '579392587706-auul99bgh1nu7a00u4rv7sp6qdca2gbf.apps.googleusercontent.com',
    SESSION_PASSWORD: 'asdfasldkfjasdlůfjkasldkůfjasdjfůlkasdf',
  },
});

const SentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);
