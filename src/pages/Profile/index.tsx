import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import myBanner from '@/assets/profile-banner.png';
import myProfileIcon from '@/assets/userPhoto.svg';
import { CreateTweetBlock } from '@/components/CreateTweet';
import { Header } from '@/components/Header';
import { Modal } from '@/components/Modal';
import { ProfileEditModal } from '@/components/ProfileEditModal';
import { TweetItem } from '@/components/TweetItem';
import { UserInProfile } from '@/components/UserInProfile';
import { FirebaseCollections } from '@/constants/firebase.ts';
import { ModalStatusEnum } from '@/constants/modalStatus.ts';
import { getDocument, getTweetsByUserId } from '@/firebase/api/getData.ts';
import { useAppSelector } from '@/hooks/useStoreControl.ts';
import { getModalStatusSelector } from '@/store/selectors/appSelectors.ts';
import { ITweet, IUser } from '@/types';

import { Banner, BannerBlock, MainWrapper, Title, Wrapper } from './style.ts';

export const Profile = () => {
  const modalStatus = useAppSelector(getModalStatusSelector);
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

  useEffect(() => {
    handleGetUser();
    handleGetUserTweets();
  }, [activeUserId]);

  const { photo, email, gender, name, phone, telegram, id, lastName, dateOfBirth } = user;

  return (
    <Wrapper data-cy='profileItem'>
      <MainWrapper>
        <Header tweetsCount={tweets.length} />
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
        {modalStatus !== ModalStatusEnum.CreateTweet && (
          <CreateTweetBlock setTweets={setTweets} />
        )}
        {tweets.length > 0 && <Title>Tweets</Title>}
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
      {modalStatus === ModalStatusEnum.EditProfile && (
        <Modal>
          <ProfileEditModal handleGetUserTweets={handleGetUserTweets} />
        </Modal>
      )}
      {modalStatus === ModalStatusEnum.CreateTweet && (
        <Modal>
          <CreateTweetBlock setTweets={setTweets} />
        </Modal>
      )}
    </Wrapper>
  );
};
