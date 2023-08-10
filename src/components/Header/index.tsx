import React, { FC, memo } from 'react';

import MyArrowBackSvg from '@/assets/arrow-back.svg';
import MyWhiteArrowBackSvg from '@/assets/arrow-white.svg';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useAppSelector } from '@/hooks/useStoreControl.ts';
import { getThemeSelector } from '@/store/selectors/appSelectors.ts';
import { getUserSelector } from '@/store/selectors/userSelectors.ts';
import { ThemeEnum } from '@/theme/types.ts';

import { Counter, HeaderHomeNav, HeaderNav, HeaderWrapper, Icon, Title } from './styles';
import { IHeaderProps } from './types';

export const Header: FC<IHeaderProps> = memo(({ tweetsCount }) => {
  const isAuth = true;
  const { name } = useAppSelector(getUserSelector);
  const currentTheme = useAppSelector(getThemeSelector);

  /* const isFeedPath = checkPath(pathname, PATH.FEED);
            const isProfilePath = checkPath(pathname, `/profile/${id}`); */

  const isFeedPath = false;
  const isProfilePath = true;

  const handleNavigate = () => {
    console.log('handleNavigate');
  };

  return (
    <>
      {isAuth && (
        <HeaderWrapper>
          {isProfilePath ? (
            <HeaderNav>
              <Title>{isFeedPath ? 'Home' : name}</Title>
              {!isFeedPath && <Counter>{tweetsCount} Tweets</Counter>}
            </HeaderNav>
          ) : (
            <HeaderHomeNav>
              <Icon
                src={
                  currentTheme === ThemeEnum.Dark ? MyWhiteArrowBackSvg : MyArrowBackSvg
                }
                alt='Go back Home'
                onClick={handleNavigate}
              />
              <Title>Tweets</Title>
            </HeaderHomeNav>
          )}
          <ThemeToggle />
        </HeaderWrapper>
      )}
    </>
  );
});
