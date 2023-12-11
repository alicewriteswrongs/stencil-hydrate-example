import { newE2EPage } from '@stencil/core/testing';

describe('cmp-b', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cmp-b></cmp-b>');

    const element = await page.find('cmp-b');
    expect(element).toHaveClass('hydrated');
  });
});
