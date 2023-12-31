import { FC, memo, useState } from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { useLocation } from 'react-router-dom';

import myDeleteSvg from '@/assets/delete.svg';
import myEditSvg from '@/assets/edit.svg';
import myWhiteEditSvg from '@/assets/edit-white.svg';
import myLikeSvg from '@/assets/like.svg';
import myRedLikeSvg from '@/assets/like-fill.svg';
import myWhiteLikeSvg from '@/assets/like-white.svg';
import myPhotoSvg from '@/assets/userPhoto.svg';
import { FirebaseCollections } from '@/constants/firebase.ts';
import { PATH } from '@/constants/path.ts';
import { db } from '@/firebase';
import { setLikeOnTweet } from '@/firebase/helpers/setLikeOnTweet.ts';
import { useAppSelector } from '@/hooks/useStoreControl.ts';
import { getThemeSelector } from '@/store/selectors/appSelectors.ts';
import { userIdSelector } from '@/store/selectors/userSelectors.ts';
import { ThemeEnum } from '@/theme/types.ts';
import { checkPath } from '@/utils/checkPath.ts';
import { tweetCreatedTime } from '@/utils/tweetCreatedTime.ts';

import { ITweetItem } from './interface.ts';
import {
  Credentials,
  EditIcon,
  Icon,
  IconWrapper,
  Image,
  ImageIcon,
  ImageWrapper,
  Info,
  LikeCount,
  Name,
  Tweet,
  TweetContentWrapper,
  TweetText,
  UserDataBlock,
  Wrapper,
} from './styled.ts';

export const TweetItem: FC<ITweetItem> = memo(
  ({
    creatorId,
    name,
    email,
    date,
    text,
    likes,
    image,
    lastName,
    tweetId,
    setTweets,
    handleGetTweets,
  }) => {
    const currentTheme = useAppSelector(getThemeSelector);
    const userId = useAppSelector(userIdSelector);

    const [isRemoveVisible, setIsRemoveVisible] = useState(false);

    const { pathname } = useLocation();
    const isFeedPath = checkPath(pathname, PATH.FEED);
    const isLiked = likes.includes(userId);

    const formattedDate = ` · ${new Date(date).toDateString().slice(4, 11)}`;

    const tweetTime = tweetCreatedTime(date);

    const likeRule = isLiked
      ? myRedLikeSvg
      : (currentTheme === ThemeEnum.Dark && myWhiteLikeSvg) || myLikeSvg;

    const handleLikeTweet = async () => {
      await setLikeOnTweet(tweetId, userId);
      handleGetTweets();
    };

    const handleShowRemove = () => {
      setIsRemoveVisible(prev => !prev);
    };

    const handleDeleteTweet = async () => {
      await deleteDoc(doc(db, FirebaseCollections.Tweets, tweetId));
      setTweets(prev => prev.filter(tweet => tweet.tweetId !== tweetId));
    };

    return (
      <Wrapper data-cy='tweetItemBlock'>
        <Icon src={myPhotoSvg} alt='Photo' />
        <Tweet data-cy='tweetItem'>
          <TweetContentWrapper data-cy='tweetContent'>
            <Info>
              <UserDataBlock>
                <Name>
                  {name} {lastName}
                  <Credentials>{isFeedPath ? tweetTime : formattedDate}</Credentials>
                </Name>
                <Credentials>{email}</Credentials>
              </UserDataBlock>
              {creatorId === userId && (
                <>
                  <EditIcon
                    data-cy='editIconTweet'
                    src={currentTheme === ThemeEnum.Dark ? myWhiteEditSvg : myEditSvg}
                    alt='Edit'
                    onClick={handleShowRemove}
                  />
                  {isRemoveVisible && (
                    <IconWrapper>
                      <ImageIcon
                        data-cy='deleteIcon'
                        src={myDeleteSvg}
                        alt='Delete Tweet'
                        onClick={handleDeleteTweet}
                      />
                    </IconWrapper>
                  )}
                </>
              )}
            </Info>
            <TweetText data-cy='tweetItemText'>{text}</TweetText>
            {image && (
              <ImageWrapper>
                <Image src={image} />
              </ImageWrapper>
            )}
            <Info>
              <ImageIcon
                src={likeRule}
                alt='Like'
                data-cy='likeIcon'
                onClick={handleLikeTweet}
              />
              <LikeCount isLiked={isLiked}>{likes.length}</LikeCount>
            </Info>
          </TweetContentWrapper>
        </Tweet>
      </Wrapper>
    );
  },
);
