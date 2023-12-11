import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
})
export class MyComponent {
  render() {
    return <Host>
    <cmp-b key="asdf">light-dom</cmp-b>
    </Host>
  }
}
