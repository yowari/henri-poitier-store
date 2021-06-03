import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { HeaderComponent } from './header.component';

export default {
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [HeaderComponent],
      imports: [
        CommonModule,
        RouterTestingModule
      ],
    }),
  ],
  excludeStories: /.*Data$/,
  title: 'Header',
} as Meta;

const Template: Story<HeaderComponent> = args => ({
  props: {
    ...args
  }
});

export const Default = Template.bind({});
Default.args = {};
