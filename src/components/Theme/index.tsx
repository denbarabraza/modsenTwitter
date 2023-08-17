import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { IThemeProvider } from '@/components/Theme/interface.ts';
import { useAppSelector } from '@/hooks/useStoreControl';
import { getThemeSelector } from '@/store/selectors/appSelectors';
import { darkTheme, lightTheme } from '@/theme/theme';
import { ThemeEnum } from '@/theme/types.ts';

export const Theme: FC<IThemeProvider> = ({ children, theme }) => {
  const currentTheme = theme === ThemeEnum.Light ? lightTheme : darkTheme;

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};

export const WithTheme: FC<{ children: ReactNode }> = ({ children }) => {
  const theme = useAppSelector(getThemeSelector);

  return <Theme theme={theme}>{children}</Theme>;
};
