import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CreateTweetBlock } from '@/components/CreateTweet';
import { Header } from '@/components/Header';
import { TweetItem } from '@/components/TweetItem';
import { getAllTweets } from '@/firebase/api/getData.ts';
import { MainWrapper, Title, Wrapper } from '@/pages/Profile/style.ts';
import { ITweet } from '@/types';

export const Feed = () => {
  const [tweets, setTweets] = useState<ITweet[]>([]);
  const params = useParams();

  const handleGetAllTweets = async () => {
    const result = await getAllTweets();

    setTweets(result);
  };

  const tweetBySearch = tweets.filter(item => item.id === params?.id) as ITweet[];

  useEffect(() => {
    handleGetAllTweets();
  }, []);

  return (
    <Wrapper>
      <MainWrapper>
        <Header />
        {!params?.id ? (
          <>
            <CreateTweetBlock setTweets={setTweets} />
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
                  handleGetTweets={handleGetAllTweets}
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
              name={creator?.name}
              lastName={creator?.lastName}
              email={creator?.email}
              photo={creator?.photo}
              date={date}
              text={text}
              image={image}
              likes={likes}
              setTweets={setTweets}
              handleGetTweets={handleGetAllTweets}
            />
          ))
        )}
      </MainWrapper>
    </Wrapper>
  );
};
