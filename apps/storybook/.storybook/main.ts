import type { StorybookConfig } from '@storybook/core-common';
import { resolveTsconfigPathsToAlias } from './resolveTsconfigPathsToAlias';
import * as path from 'path';

const config: StorybookConfig = {
  stories: [
    {
      titlePrefix: 'Apps/EtoTodoClient',
      directory: '../../eto-todo-client/src',
      files: '{,!(node_modules)/**/}*.stories.@(js|jsx|ts|tsx)',
    },
    {
      titlePrefix: 'Packages/UI',
      directory: '../../../packages/ui/src',
      files: '{,!(node_modules)/**/}*.stories.@(js|jsx|ts|tsx)',
    },
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-include',
    // Addon storybook-include doesn't work together with SWC compiler (issue: https://github.com/theKashey/storybook-include/issues/2)
    // "storybook-addon-swc",
    'storybook-addon-next-router',
    'storybook-addon-apollo-client',
  ],
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          ...resolveTsconfigPathsToAlias({
            tsconfigPath: '../tsconfig.json',
            webpackConfigBasePath: path.resolve(__dirname, '../'),
          }),
        },
      },
    };
  },
};

module.exports = config;
