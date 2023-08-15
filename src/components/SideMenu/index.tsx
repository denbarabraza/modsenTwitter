import { signOut } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';

import twitterLogo from '@/assets/logo.svg';
import myPhotoSvg from '@/assets/photo.svg';
import { Button } from '@/components/Button/Button.tsx';
import { MenuItem } from '@/components/MenuItem';
import { menuItems } from '@/constants/menuItems.ts';
import { PATH } from '@/constants/path.ts';
import { auth } from '@/firebase';
import { useAppDispatch, useAppSelector } from '@/hooks/useStoreControl.ts';
import { getThemeSelector } from '@/store/selectors/appSelectors.ts';
import { getUserSelector } from '@/store/selectors/userSelectors.ts';
import { ModalStatusEnum, setModalStatus } from '@/store/slice/appSlice.ts';
import { removeUser } from '@/store/slice/userSlice.ts';
import { ThemeEnum } from '@/theme/types.ts';
import { checkPath } from '@/utils/checkPath.ts';

import {
  Credentials,
  Email,
  IconLogo,
  IconPhoto,
  IconPhotoItem,
  MenuBlock,
  Name,
  UserInfo,
  Wrapper,
} from './style.ts';

export const SideMenu = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(getThemeSelector);

  const navigate = useNavigate();
  const { name, email, id, photo, lastName } = useAppSelector(getUserSelector);
  const { pathname } = useLocation();
  const isFeedPath = checkPath(pathname, PATH.FEED);

  const handleCreateTweetInMenu = () => {
    dispatch(setModalStatus(ModalStatusEnum.CreateTweet));
  };

  const handleNavigate = () => {
    navigate(`/profile/${id}`);
  };

  const handleLogOut = () => {
    signOut(auth);
    dispatch(removeUser());
    navigate(PATH.HOME);
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
            id={id}
          />
        ))}
        <Button title='Tweet' callBack={handleCreateTweetInMenu} isValid />
        <UserInfo>
          <IconPhotoItem>
            <IconPhoto
              src={photo || myPhotoSvg}
              alt='profile in menu'
              onClick={handleNavigate}
            />
          </IconPhotoItem>

          <Credentials>
            <Name>
              {name} {lastName}
            </Name>
            <Email>{email}</Email>
          </Credentials>
        </UserInfo>
        {!isFeedPath && <Button title='Log Out' callBack={handleLogOut} isValid />}
      </MenuBlock>
    </Wrapper>
  );
};
