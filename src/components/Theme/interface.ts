import { ReactNode } from 'react';

import { ThemeEnum } from '@/theme/types.ts';

export interface IThemeProvider {
  children: ReactNode;
  theme: ThemeEnum;
}
