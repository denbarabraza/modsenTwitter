import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { useAppSelector } from '@/hooks/useStoreControl';
import { getThemeSelector } from '@/store/selectors/appSelectors';
import { darkTheme, lightTheme } from '@/theme/theme';
import { ThemeEnum } from '@/theme/types';

export const Theme = ({ children }: { children: ReactNode }) => {
  const theme = useAppSelector(getThemeSelector);
  const currentTheme = theme === ThemeEnum.Light ? lightTheme : darkTheme;

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};
