import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import myProfileIcon from '@/assets/photo.svg';
import myBanner from '@/assets/profile-banner.png';
import { CreateTweetBlock } from '@/components/CreateTweet';
import { Header } from '@/components/Header';
import { TweetItem } from '@/components/TweetItem';
import { UserInProfile } from '@/components/UserInProfile';
import { FirebaseCollections } from '@/constants/firebase.ts';
import { getDocument, getTweetsByUserId } from '@/firebase/api/getData.ts';
import { ITweet, IUser } from '@/types';

import { Banner, BannerBlock, MainWrapper, Title, Wrapper } from './styles.ts';

export const Profile = () => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [tweets, setTweets] = useState<ITweet[]>([]);

  const { pathname } = useLocation();
  const activeUserId = pathname.split('/')[2];

  const handleGetUser = async () => {
    const currentUser = (await getDocument(FirebaseCollections.Users, activeUserId)) as
      | IUser
      | false;

    if (currentUser) setUser(currentUser);
  };
  const handleGetUserTweets = async () => {
    const result = await getTweetsByUserId('creator.id', activeUserId);

    setTweets(result);
  };

  const { photo, email, gender, name, phone, dateOfBirth, telegram, id, lastName } = user;

  useEffect(() => {
    handleGetUser();
    handleGetUserTweets();
  }, [activeUserId]);

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
