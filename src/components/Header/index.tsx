import { FC, memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import myArrowBackSvg from '@/assets/arrow-back.svg';
import { ThemeToggle } from '@/components/ThemeToggle';
import { PATH } from '@/constants/path.ts';
import { useAppSelector } from '@/hooks/useStoreControl.ts';
import { getUserSelector } from '@/store/selectors/userSelectors.ts';
import { checkPath } from '@/utils/checkPath.ts';

import { Counter, HeaderHomeNav, HeaderNav, HeaderWrapper, Icon, Title } from './styles';
import { IHeaderProps } from './types';

export const Header: FC<IHeaderProps> = memo(({ tweetsCount }) => {
  const isAuth = true;
  const { name, id, lastName } = useAppSelector(getUserSelector);

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
            <Icon src={myArrowBackSvg} alt='Go back Profile' onClick={handleNavigate} />
            <Title>All Tweets</Title>
          </HeaderHomeNav>
        )}
        <ThemeToggle />
      </HeaderWrapper>
    )
  );
});
