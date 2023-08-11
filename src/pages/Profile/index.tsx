import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import myProfileIcon from '@/assets/photo.svg';
import myBanner from '@/assets/profile-banner.png';
import myTweetImage from '@/assets/tweet-image.png';
import { CreateTweetBlock } from '@/components/CreateTweet';
import { Header } from '@/components/Header';
import { TweetItem } from '@/components/TweetItem';
import { UserBanner } from '@/components/UserBanner';
import { ITweet, IUser } from '@/types';

import { Banner, BannerBlock, MainWrapper, Title, Wrapper } from './styles.ts';

export const Profile = () => {
  const [user, setUser] = useState<IUser>({
    id: '1',
    name: 'Denis',
    nameLowercase: 'DENIS',
    phone: '+375446541365461',
    surname: 'Bareischev',
    password: '1231123',
    telegram: '@denbarabraza',
    email: 'denis.bareischev@gmail.com',
    gender: 'Male',
    token: undefined,
    photo: myProfileIcon,
  } as IUser);
  const [tweets, setTweets] = useState<ITweet[]>([
    {
      id: '21321',
      tweetId: 'string',
      creator: {
        id: '1',
        name: 'Denis',
        email: 'denis.bareischev@gmail.com',
        photo: myProfileIcon,
      },
      text: 'My tweet 1',
      date: Number(new Date()),
      image: myTweetImage,
      likes: ['11', '12'],
    },
    {
      id: '21321',
      tweetId: 'string',
      creator: {
        id: '2',
        name: 'Den',
        email: 'denis.bareischev@gmail.com',
        photo: myProfileIcon,
      },
      text: 'My tweet 2',
      date: Number(new Date()),
      likes: ['11'],
    },
  ]);

  console.log(tweets);

  const handleGetUser = async () => {
    console.log('handleGetUser');
  };

  const handleGetUserTweets = async () => {
    console.log('handleGetUserTweets');
  };

  const { photo, email, gender, name, phone, telegram, id, surname } = user;

  return (
    <Wrapper>
      <MainWrapper>
        <Header tweetsCount={100} />
        <BannerBlock>
          <Banner src={myBanner} alt='profile banner' />
        </BannerBlock>
        <UserBanner
          photo={photo}
          email={email}
          gender={gender}
          name={name}
          phone={phone}
          telegram={telegram}
          id={id}
          surname={surname}
        />
        <CreateTweetBlock setTweets={setTweets} />
        <Title>Tweets</Title>
        {tweets.length > 0 &&
          tweets.map(({ date, text, image, likes, tweetId, creator }) => (
            <TweetItem
              key={tweetId}
              tweetId={tweetId}
              creatorId={creator?.id}
              username={creator?.name}
              email={creator?.email}
              photo={creator?.photo}
              date={date}
              text={text}
              image={image}
              likes={likes}
              setTweets={setTweets}
              handleGetTweets={handleGetUserTweets}
            />
          ))}
      </MainWrapper>
    </Wrapper>
  );
};
