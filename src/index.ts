import { registerPlugin } from '@capacitor/core';

import type { DarkModeDetectorPlugin } from './definitions';

const DarkModeDetector = registerPlugin<DarkModeDetectorPlugin>(
  'DarkModeDetector',
  {
    web: () => import('./web').then(m => new m.DarkModeDetectorWeb()),
  },
);

export * from './definitions';
export { DarkModeDetector };
