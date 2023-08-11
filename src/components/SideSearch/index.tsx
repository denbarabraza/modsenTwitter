import { ChangeEvent, useState } from 'react';

import myTweetIMG from '@/assets/photo.svg';
import mySearchSvg from '@/assets/search.svg';
import { Alert } from '@/components/Alert';
import { TweetSearchResult } from '@/components/TweetSearchResult';
import { UserSearchResult } from '@/components/UserSearchResult';
import { sideSearchText } from '@/constants/dataForPages.ts';
import { ICreator, ITweetBySearch } from '@/types';

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
  const [searchValue, setSearchValue] = useState<string>('');
  const [users] = useState<ICreator[]>([
    {
      id: 'ICreator',
      email: 'denis.bareischev@gmail.com',
      name: 'DenB',
      photo: myTweetIMG,
    },
  ]);
  const [tweets] = useState<ITweetBySearch[]>([
    {
      id: 'ds',
      text: '4-kursni tugatgunimcha kamida bitta biznesim bolishini, uylanish uchun moddiy jihatdan to la-to kis tayyor bo lishni, soglik va jismoniy holatni normallashtirishni reja qildim',
    },
  ]);

  const usersResult = users.map(data => <UserSearchResult {...data} key={data.id} />);
  const tweetsResult = tweets.map(data => <TweetSearchResult {...data} key={data.id} />);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    console.log(searchValue);
    setSearchValue('');
  };

  return (
    <Wrapper>
      <SearchWrapper>
        <ButtonIcon type='submit'>
          <Icon src={mySearchSvg} alt='Search twitter' onClick={handleSearch} />
        </ButtonIcon>
        <Input placeholder='Search Twitter' value={searchValue} onChange={handleChange} />
      </SearchWrapper>
      {(users.length !== 0 || tweets.length !== 0) && (
        <ResultWrapper>
          <Title>{title}</Title>
          <ResultList>{usersResult}</ResultList>
          <ResultList>{tweetsResult}</ResultList>
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
