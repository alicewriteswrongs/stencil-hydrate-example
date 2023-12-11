import { newSpecPage } from '@stencil/core/testing';
import { CmpB } from '../cmp-b';

describe('cmp-b', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CmpB],
      html: `<cmp-b></cmp-b>`,
    });
    expect(page.root).toEqualHtml(`
      <cmp-b>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cmp-b>
    `);
  });
});
