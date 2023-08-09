import Header from '@/components/Header';

import { MainWrapper, Wrapper } from './styles.ts';

export const Profile = () => {
  return (
    <Wrapper>
      <MainWrapper>
        <Header tweetsCount={100} />
        {/* <Banner src={MyBanner} alt='Profile Banner' />
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
          ))} */}
      </MainWrapper>
    </Wrapper>
  );
};

// <Wrapper>
//             <div>Banner</div>
//             <div>User</div>
//             <div>Create Twits</div>
//             <div>Twits</div>
//         </Wrapper>
