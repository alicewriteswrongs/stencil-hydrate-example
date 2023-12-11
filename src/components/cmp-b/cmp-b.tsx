import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cmp-b',
  styleUrl: 'cmp-b.css',
})
export class CmpB {
  render() {
    return (
      <Host>
      <slot></slot>
      <footer></footer>
      </Host>
    );
  }
}
