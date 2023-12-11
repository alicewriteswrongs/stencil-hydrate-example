import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'hydrate-example',
  outputTargets: [
    {
      type: 'dist-hydrate-script',
    },
    { type: "dist" },
  ],
};
