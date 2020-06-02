import { configure,addParameters   } from '@storybook/react';
import { themes } from '@storybook/theming'
addParameters({
    options: {
      theme: themes.dark
    }
  })
  
  function loadStories() {
    require('../src/stories');
  }
  
  configure(loadStories, module);