import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import myProfileIcon from '@/assets/photo.svg';
import myBanner from '@/assets/profile-banner.png';
import myTweetImage from '@/assets/tweet-image.png';
import { CreateTweetBlock } from '@/components/CreateTweet';
import { Header } from '@/components/Header';
import { TweetItem } from '@/components/TweetItem';
import { UserInProfile } from '@/components/UserInProfile';
import { FirebaseCollections } from '@/constants/firebase.ts';
import { getDocument } from '@/firebase/api/getData.ts';
import { ITweet, IUser } from '@/types';

import { Banner, BannerBlock, MainWrapper, Title, Wrapper } from './styles.ts';

export const Profile = () => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [tweets, setTweets] = useState<ITweet[]>([
    {
      id: 'K0945gHmE9c4wttuarfRiuKr7fj2',
      tweetId: 'K0945gHmE9c4wttuarfRiuKr7fj2',
      creator: {
        id: 'K0945gHmE9c4wttuarfRiuKr7fj2',
        name: 'Denis',
        lastName: 'Bareischev',
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
        lastName: 'Basd',
        email: 'denis.bareischev@gmail.com',
        photo: myProfileIcon,
      },
      text: 'My tweet 2',
      date: Number(new Date()),
      likes: ['11'],
    },
  ]);

  const { pathname } = useLocation();
  const pathNameIndex = 2;
  const pathId = pathname.split('/')[pathNameIndex];

  const handleGetUser = async () => {
    const currentUser = (await getDocument(FirebaseCollections.Users, pathId)) as
      | IUser
      | false;

    if (currentUser) setUser(currentUser);
  };
  const handleGetUserTweets = async () => {
    console.log('handleGetUserTweets');
  };

  const { photo, email, gender, name, phone, dateOfBirth, telegram, id, lastName } = user;

  useEffect(() => {
    handleGetUser();
  }, [pathId]);

  return (
    <Wrapper>
      <MainWrapper>
        <Header tweetsCount={100} />
        <BannerBlock>
          <Banner src={myBanner} alt='profile banner' />
        </BannerBlock>
        <UserInProfile
          photo={photo || myProfileIcon}
          email={email}
          gender={gender}
          name={name}
          phone={phone}
          telegram={telegram}
          id={id}
          lastName={lastName}
          dateOfBirth={dateOfBirth}
        />
        <CreateTweetBlock setTweets={setTweets} />
        <Title>Tweets</Title>
        {tweets.length > 0 &&
          tweets.map(({ date, text, image, likes, tweetId, creator }) => (
            <TweetItem
              key={tweetId}
              tweetId={tweetId}
              creatorId={creator?.id}
              name={creator?.name}
              lastName={creator?.lastName}
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
