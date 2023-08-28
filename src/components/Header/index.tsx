import { FC, memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import myArrowBackSvg from '@/assets/arrow-back.svg';
import { MenuHeader } from '@/components/MenuHeader';
import { ThemeToggle } from '@/components/ThemeToggle';
import { PATH } from '@/constants/path.ts';
import { useAppSelector } from '@/hooks/useStoreControl.ts';
import { getUserSelector } from '@/store/selectors/userSelectors.ts';
import { checkPath } from '@/utils/checkPath.ts';

import { IHeaderProps } from './interface.ts';
import {
  Counter,
  HeaderHomeNav,
  HeaderNav,
  HeaderRootItem,
  HeaderWrapper,
  Icon,
  Title,
} from './styled.ts';

export const Header: FC<IHeaderProps> = memo(({ tweetsCount }) => {
  const { name, id, lastName } = useAppSelector(getUserSelector);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isFeedPath = checkPath(pathname, PATH.FEED);

  const handleNavigate = () => {
    navigate(isFeedPath ? `/profile/${id}` : PATH.FEED);
  };

  return (
    <HeaderWrapper data-cy='headerItem'>
      {!isFeedPath ? (
        <HeaderRootItem>
          <MenuHeader />
          <HeaderNav>
            <Title>{`${name} ${lastName}`}</Title>
            {!isFeedPath && <Counter>{tweetsCount} Tweets</Counter>}
          </HeaderNav>
        </HeaderRootItem>
      ) : (
        <HeaderHomeNav>
          <Icon src={myArrowBackSvg} alt='Go back Profile' onClick={handleNavigate} />
          <Title>Go back Profile</Title>
        </HeaderHomeNav>
      )}
      <ThemeToggle />
    </HeaderWrapper>
  );
});
