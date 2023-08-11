import { useState } from 'react';
import { useParams } from 'react-router-dom';

import myProfileIcon from '@/assets/photo.svg';
import myTweetImage from '@/assets/tweet-image.png';
import { CreateTweetBlock } from '@/components/CreateTweet';
import { Header } from '@/components/Header';
import { TweetItem } from '@/components/TweetItem';
import { MainWrapper, Title, Wrapper } from '@/pages/Profile/styles.ts';
import { ITweet } from '@/types';

export const Feed = () => {
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
  ]);
  const params = useParams();

  const handleGetTweets = async () => {
    console.log('handleGetTweets');
  };

  const tweetBySearch = tweets.filter(item => item.id === params?.id) as ITweet[];

  return (
    <Wrapper>
      <MainWrapper>
        <Header />
        {!params?.id ? (
          <>
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
                  handleGetTweets={handleGetTweets}
                />
              ))}
          </>
        ) : (
          tweetBySearch.length > 0 &&
          tweetBySearch.map(({ date, text, image, likes, tweetId, creator }) => (
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
              handleGetTweets={handleGetTweets}
            />
          ))
        )}
      </MainWrapper>
    </Wrapper>
  );
};
