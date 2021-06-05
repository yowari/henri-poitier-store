import { CommonModule } from '@angular/common';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { BookQuantityComponent } from './book-quantity.component';

export default {
  component: BookQuantityComponent,
  decorators: [
    moduleMetadata({
      declarations: [BookQuantityComponent],
      imports: [
        CommonModule
      ],
    }),
  ],
  excludeStories: /.*Data$/,
  title: 'Book Quantity',
} as Meta;

export const actionsData = {
  addToCart: action('addToCart'),
  removeFromCart: action('removeFromCart'),
};

const Template: Story<BookQuantityComponent> = args => ({
  props: {
    ...args,
    addToCart: actionsData.addToCart,
    removeFromCart: actionsData.removeFromCart
  }
});

export const Default = Template.bind({});
Default.args = {
  quantity: 0
};

export const WithQuantity = Template.bind({});
WithQuantity.args = {
  quantity: 2
}
