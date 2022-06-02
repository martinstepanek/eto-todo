const { resolve } = require('path');

/**
 * @see https://gist.github.com/nerdyman/2f97b24ab826623bff9202750013f99e
 * Resolve tsconfig.json paths to Webpack aliases
 * @param  {string} tsconfigPath           - Path to tsconfig
 * @param  {string} webpackConfigBasePath  - Path from tsconfig to Webpack config to create absolute aliases
 * @return {object}                        - Webpack alias config
 */
export function resolveTsconfigPathsToAlias({
  tsconfigPath = './tsconfig.json',
  webpackConfigBasePath = __dirname,
} = {}) {
  const { paths } = require(tsconfigPath).compilerOptions;

  const aliases: { [key: string]: string } = {};

  Object.keys(paths).forEach((item) => {
    const key = item.replace('/*', '');
    aliases[key] = resolve(
      webpackConfigBasePath,
      paths[item][0].replace('/*', '').replace('*', '')
    );
  });

  return aliases;
}
