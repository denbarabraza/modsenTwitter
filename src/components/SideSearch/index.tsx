import { ChangeEvent, FormEvent, useState } from 'react';
import { useLocation } from 'react-router-dom';

import mySearchSvg from '@/assets/search.svg';
import { Alert } from '@/components/Alert';
import { SetState } from '@/components/SideSearch/type.ts';
import { TweetSearchResult } from '@/components/TweetSearchResult';
import { UserSearchResult } from '@/components/UserSearchResult';
import { sideSearchText } from '@/constants/dataForPages.ts';
import { PATH } from '@/constants/path.ts';
import { getTweetsBySearch, getUsersBySearch } from '@/firebase/api/getData.ts';
import { useAppDispatch } from '@/hooks/useStoreControl.ts';
import { setAlert, setAppLoading } from '@/store/slice/appSlice.ts';
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
  TextLink,
  Title,
  Wrapper,
} from './style.ts';

const { title, link, navLinks, copyrightText } = sideSearchText;

export const SideSearch = () => {
  const dispatch = useAppDispatch();

  const [searchValue, setSearchValue] = useState<string>('');
  const [users, setUsers] = useState<ICreator[]>([
    {
      id: 'ICreator',
      email: 'denis.bareischev@gmail.com',
      name: 'Jonh',
      lastName: 'Wick',
      photo: mySearchSvg,
    },
  ]);
  const [tweets, setTweets] = useState<ITweetBySearch[]>([
    {
      id: 'ds',
      text: '4-kursni tugatgunimcha kamida bitta biznesim bolishini, uylanish uchun moddiy jihatdan to la-to kis tayyor bo lishni, soglik va jismoniy holatni normallashtirishni reja qildim',
    },
  ]);

  const { pathname } = useLocation();
  const isFeedPath = checkPath(pathname, PATH.FEED);

  const usersResult = users.map(data => <UserSearchResult {...data} key={data.id} />);
  const tweetsResult = tweets.map(data => <TweetSearchResult {...data} key={data.id} />);

  const getData = isFeedPath ? getUsersBySearch : getTweetsBySearch;
  const field = isFeedPath ? 'nameLowercase' : 'text';
  const errorMessage = isFeedPath ? 'User not found' : 'Tweet not found';
  const readySearchValue = searchValue.trim();
  const placeholder = isFeedPath ? 'Search Users' : 'Search Tweets';
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchData = async <T,>(setter: SetState<T[]>) => {
    dispatch(setAppLoading(true));

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
      console.log(newData);
      setter(newData);
    } else {
      setter([]);
    }
    dispatch(setAppLoading(false));
  };

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();

    if (isFeedPath) handleSearchData(setUsers);
    if (!isFeedPath) handleSearchData(setTweets);
  };

  return (
    <Wrapper>
      <SearchWrapper>
        <ButtonIcon type='submit'>
          <Icon src={mySearchSvg} alt='Search twitter' onClick={handleSearch} />
        </ButtonIcon>
        <Input placeholder={placeholder} value={searchValue} onChange={handleChange} />
      </SearchWrapper>
      {(users.length !== 0 || tweets.length !== 0) && (
        <ResultWrapper>
          <Title>{title}</Title>
          <ResultList>{isFeedPath ? usersResult : tweetsResult}</ResultList>
          <TextLink to='#'>{link}</TextLink>
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
      <Alert />
    </Wrapper>
  );
};
