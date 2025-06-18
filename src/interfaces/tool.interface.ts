import { CoreConfig } from '@olane/o-core';

export interface oToolConfig extends CoreConfig {
  description?: string;
  dependencies?: string[];
  parameters?: any;
}
