import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';

import myDeleteSvg from '@/assets/delete.svg';
import myEditSvg from '@/assets/edit.svg';
import myWhiteEditSvg from '@/assets/edit-white.svg';
import myLikeSvg from '@/assets/like.svg';
import myRedLikeSvg from '@/assets/like-fill.svg';
import myWhiteLikeSvg from '@/assets/like-white.svg';
import myPhotoSvg from '@/assets/photo.svg';
import { PATH } from '@/constants/path.ts';
import { useAppSelector } from '@/hooks/useStoreControl.ts';
import { getThemeSelector } from '@/store/selectors/appSelectors.ts';
import { userIdSelector } from '@/store/selectors/userSelectors.ts';
import { ThemeEnum } from '@/theme/types.ts';
import { checkPath } from '@/utils/checkPath.ts';
import { tweetCreatedTime } from '@/utils/tweetCreatedTime.ts';

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
} from './styles';
import { ITweetItem } from './types';

export const TweetItem: FC<ITweetItem> = props => {
  const { creatorId, name, email, date, text, likes, image, photo, lastName } = props;

  const [isRemoveVisible, setIsRemoveVisible] = useState(false);

  const { pathname } = useLocation();
  const isFeedPath = checkPath(pathname, PATH.FEED);

  const currentTheme = useAppSelector(getThemeSelector);
  const userId = useAppSelector(userIdSelector);

  const isLiked = likes.includes(userId);

  const formattedDate = ` · ${new Date(date).toDateString().slice(4, 11)}`;

  const tweetTime = tweetCreatedTime(date);

  const handleLikeTweet = () => {
    console.log('handleLikeTweet');
  };

  const handleShowRemove = () => {
    setIsRemoveVisible(prev => !prev);
  };

  const handleDeleteTweet = () => {
    console.log('handleDeleteTweet');
  };

  return (
    <Wrapper>
      <Icon src={photo || myPhotoSvg} alt='Photo' />
      <Tweet>
        <TweetContentWrapper>
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
                  data-cy='editIcon'
                  src={currentTheme === ThemeEnum.Dark ? myWhiteEditSvg : myEditSvg}
                  alt='Edit'
                  onClick={handleShowRemove}
                />
                {isRemoveVisible && (
                  <IconWrapper>
                    <ImageIcon
                      src={myDeleteSvg}
                      alt='Delete Tweet'
                      onClick={handleDeleteTweet}
                    />
                  </IconWrapper>
                )}
              </>
            )}
          </Info>
          <TweetText>{text}</TweetText>
          {image && (
            <ImageWrapper>
              <Image src={image} />
            </ImageWrapper>
          )}
          <Info>
            <ImageIcon
              src={
                isLiked
                  ? myRedLikeSvg
                  : (currentTheme === ThemeEnum.Dark && myWhiteLikeSvg) || myLikeSvg
              }
              alt='Like'
              onClick={handleLikeTweet}
            />
            <LikeCount isLiked={isLiked}>{likes.length}</LikeCount>
          </Info>
        </TweetContentWrapper>
      </Tweet>
    </Wrapper>
  );
};
