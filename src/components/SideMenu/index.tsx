import twitterLogo from '@/assets/logo.svg';
import { Button } from '@/components/Button/Button.tsx';
import { MenuItem } from '@/components/MenuItem';
import { menuItems } from '@/constants/menuItems.ts';
import { useAppSelector } from '@/hooks/useStoreControl.ts';
import { getThemeSelector } from '@/store/selectors/appSelectors.ts';
import { ThemeEnum } from '@/theme/types.ts';

import { Icon, MenuBlock, Wrapper } from './style.ts';

export const SideMenu = () => {
  const theme = useAppSelector(getThemeSelector);

  return (
    <Wrapper>
      <MenuBlock>
        <Icon src={twitterLogo} alt='twitterLogo' />
        {menuItems.map(({ to, text, src, srcAlt }) => (
          <MenuItem
            key={text}
            path={to}
            alt={text}
            src={theme === ThemeEnum.Dark ? srcAlt : src}
            text={text}
            id='1'
          />
        ))}
        <Button title='Tweet' callBack={() => console.log('Tweet')} isValid />
      </MenuBlock>
    </Wrapper>
  );
};
