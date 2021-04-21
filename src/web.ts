import { WebPlugin } from '@capacitor/core';

import type { DarkModeDetectorPlugin } from './definitions';

export class DarkModeDetectorWeb
  extends WebPlugin
  implements DarkModeDetectorPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
