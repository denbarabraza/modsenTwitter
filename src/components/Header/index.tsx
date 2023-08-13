import { FC, memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import MyArrowBackSvg from '@/assets/arrow-back.svg';
import MyWhiteArrowBackSvg from '@/assets/arrow-white.svg';
import { ThemeToggle } from '@/components/ThemeToggle';
import { PATH } from '@/constants/path.ts';
import { useAppSelector } from '@/hooks/useStoreControl.ts';
import { getThemeSelector } from '@/store/selectors/appSelectors.ts';
import { getUserSelector } from '@/store/selectors/userSelectors.ts';
import { ThemeEnum } from '@/theme/types.ts';
import { checkPath } from '@/utils/checkPath.ts';

import { Counter, HeaderHomeNav, HeaderNav, HeaderWrapper, Icon, Title } from './styles';
import { IHeaderProps } from './types';

export const Header: FC<IHeaderProps> = memo(({ tweetsCount }) => {
  const isAuth = true;
  const { name, id, lastName } = useAppSelector(getUserSelector);
  const currentTheme = useAppSelector(getThemeSelector);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isFeedPath = checkPath(pathname, PATH.FEED);
  const isProfilePath = checkPath(pathname, `/profile/${id}`);

  const handleNavigate = () => {
    navigate(isFeedPath ? `/profile/${id}` : PATH.FEED);
  };

  return (
    isAuth && (
      <HeaderWrapper>
        {isProfilePath ? (
          <HeaderNav>
            <Title>{isFeedPath ? 'Home' : `${name} ${lastName}`}</Title>
            {!isFeedPath && <Counter>{tweetsCount} Tweets</Counter>}
          </HeaderNav>
        ) : (
          <HeaderHomeNav>
            <Icon
              src={currentTheme === ThemeEnum.Dark ? MyWhiteArrowBackSvg : MyArrowBackSvg}
              alt='Go back Home'
              onClick={handleNavigate}
            />
            <Title>Tweets</Title>
          </HeaderHomeNav>
        )}
        <ThemeToggle />
      </HeaderWrapper>
    )
  );
});
