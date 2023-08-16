import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import mySearchSvg from '@/assets/search.svg';
import { SetState } from '@/components/SideSearch/type.ts';
import { TweetSearchResult } from '@/components/TweetSearchResult';
import { UserSearchResult } from '@/components/UserSearchResult';
import { sideSearchText } from '@/constants/dataForPages.ts';
import { PATH } from '@/constants/path.ts';
import { getTweetsBySearch, getUsersBySearch } from '@/firebase/api/getData.ts';
import { useAppDispatch } from '@/hooks/useStoreControl.ts';
import { setAlert } from '@/store/slice/appSlice.ts';
import { ICreator, ITweetBySearch } from '@/types';
import { checkPath } from '@/utils/checkPath.ts';

import {
  ButtonIcon,
  Icon,
  Input,
  Nav,
  NavItem,
  NavItemLink,
  ResultList,
  ResultWrapper,
  SearchWrapper,
  ShowMoreItem,
  Title,
  Wrapper,
} from './style.ts';

const { title, link, navLinks, copyrightText } = sideSearchText;

export const SideSearch = () => {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState<boolean>(false);
  const [countItem, setCountItem] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>('');
  const [users, setUsers] = useState<ICreator[]>([]);
  const [tweets, setTweets] = useState<ITweetBySearch[]>([]);

  const { pathname } = useLocation();
  const isFeedPath = checkPath(pathname, PATH.FEED);
  const navigate = useNavigate();

  const usersResult = users
    .filter((_, index) => index <= countItem)
    .map(user => <UserSearchResult {...user} key={user.id} />);
  const tweetsResult = tweets
    .filter((_, index) => index <= countItem)
    .map(tweet => <TweetSearchResult {...tweet} key={tweet.id} />);

  const getData = isFeedPath ? getUsersBySearch : getTweetsBySearch;
  const field = isFeedPath ? 'nameLowercase' : 'text';
  const errorMessage = isFeedPath ? 'User not found' : 'Tweet not found';
  const readySearchValue = searchValue.trim();
  const placeholder = isFeedPath ? 'Search Users' : 'Search Tweets';
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchData = async <T,>(setter: SetState<T[]>) => {
    setLoading(true);
    if (searchValue) {
      const newData = (await getData(field, readySearchValue)) as T[];

      if (newData.length === 0) {
        dispatch(
          setAlert({
            isVisible: true,
            message: errorMessage,
          }),
        );
      }
      setter(newData);
    } else {
      setter([]);
    }
    setLoading(false);
  };

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();

    if (isFeedPath) handleSearchData(setUsers);
    if (!isFeedPath) handleSearchData(setTweets);
  };

  const handleShowMoreItem = () => {
    setCountItem(prevState => prevState + 2);
  };

  useEffect(() => {
    setSearchValue('');
    setCountItem(1);
    setUsers([]);
    setTweets([]);
  }, [navigate]);

  return (
    <Wrapper>
      <SearchWrapper>
        <ButtonIcon type='submit'>
          <Icon src={mySearchSvg} alt='Search twitter' onClick={handleSearch} />
        </ButtonIcon>
        <Input placeholder={placeholder} value={searchValue} onChange={handleChange} />
      </SearchWrapper>
      {loading && <div>Loading...</div>}
      {(users.length !== 0 || tweets.length !== 0) && (
        <ResultWrapper>
          <Title>{title}</Title>
          <ResultList>{isFeedPath ? usersResult : tweetsResult}</ResultList>
          <ShowMoreItem onClick={handleShowMoreItem}>{link}</ShowMoreItem>
        </ResultWrapper>
      )}
      <Nav>
        {navLinks.map(({ name, to }) => (
          <NavItem key={name}>
            <NavItemLink to={to}>{name}</NavItemLink>
          </NavItem>
        ))}
        <NavItem>{copyrightText}</NavItem>
      </Nav>
    </Wrapper>
  );
};
