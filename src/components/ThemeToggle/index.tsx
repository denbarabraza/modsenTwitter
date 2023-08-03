import { FC, memo, useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/useStoreControl';
import { getThemeSelector } from '@/store/selectors/appSelectors';
import { setTheme } from '@/store/slice/appSlice.ts';
import { ThemeEnum } from '@/theme/types';

import { IThemeToggle } from './interface';
import { ToggleContainer, ToggleInput, ToggleLabel, ToggleSlider } from './styled';

export const ThemeToggle: FC<IThemeToggle> = memo(({ open }) => {
  const theme = useAppSelector(getThemeSelector);
  const dispatch = useAppDispatch();
  const handleToggleChange = useCallback(() => {
    const rulesTheme = theme === ThemeEnum.Light ? ThemeEnum.Dark : ThemeEnum.Light;

    dispatch(setTheme(rulesTheme));
  }, [dispatch, theme]);

  return (
    <ToggleContainer open={open || false}>
      <ToggleLabel>
        <ToggleInput
          type='checkbox'
          checked={theme !== ThemeEnum.Light}
          onChange={handleToggleChange}
        />
        <ToggleSlider data-cy='themeToggleSlider' />
      </ToggleLabel>
    </ToggleContainer>
  );
});
