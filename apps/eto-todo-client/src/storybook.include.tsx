import { addStoryDecorators } from 'storybook-include';
import GlobalStyle from './styles/global';

export default () => {
  addStoryDecorators(() => {
    return [
      (Story) => (
        <>
          <GlobalStyle />
          <Story />
        </>
      ),
    ];
  });
};
