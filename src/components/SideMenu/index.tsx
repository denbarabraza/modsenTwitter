import { signOut } from 'firebase/auth';

import twitterLogo from '@/assets/logo.svg';
import myPhotoSvg from '@/assets/photo.svg';
import { Button } from '@/components/Button/Button.tsx';
import { MenuItem } from '@/components/MenuItem';
import { menuItems } from '@/constants/menuItems.ts';
import { auth } from '@/firebase';
import { useAppDispatch, useAppSelector } from '@/hooks/useStoreControl.ts';
import { getThemeSelector } from '@/store/selectors/appSelectors.ts';
import { removeUser } from '@/store/slice/userSlice.ts';
import { ThemeEnum } from '@/theme/types.ts';

import {
  Credentials,
  Email,
  IconLogo,
  IconPhoto,
  MenuBlock,
  Name,
  UserInfo,
  Wrapper,
} from './style.ts';

export const SideMenu = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(getThemeSelector);

  const handleNavigate = () => {
    console.log('Navigate to user');
  };

  const handleLogOut = () => {
    signOut(auth);
    dispatch(removeUser());
  };

  return (
    <Wrapper>
      <MenuBlock>
        <IconLogo src={twitterLogo} alt='twitterLogo' />
        {menuItems.map(({ to, text, src, srcAlt }) => (
          <MenuItem
            key={text}
            path={to}
            alt={text}
            src={theme === ThemeEnum.Dark ? srcAlt : src}
            text={text}
            id='2'
          />
        ))}
        <Button title='Tweet' callBack={() => console.log('Tweet')} isValid />
        <UserInfo>
          <IconPhoto src={myPhotoSvg} alt='photo user' onClick={handleNavigate} />
          <Credentials>
            <Name>Denis</Name>
            <Email>@denbarabraza</Email>
          </Credentials>
        </UserInfo>
        <Button title='Log Out' callBack={handleLogOut} isValid />
      </MenuBlock>
    </Wrapper>
  );
};
