import { FC, memo } from 'react';

import editProfile from '@/assets/editProfile.svg';
import { useAppSelector } from '@/hooks/useStoreControl.ts';
import { getUserSelector } from '@/store/selectors/userSelectors.ts';
import { IUser } from '@/types';

import {
  Credentials,
  Icon,
  IconEditProfile,
  Name,
  NameBlock,
  Statistics,
  Text,
  TextLink,
  UserInfo,
  Wrapper,
} from './styles';

const userBannerText = {
  buttonText: 'Edit profile',
  followingText: 'Following',
  followersText: 'Followers',
  followingCount: 67,
  followersCount: 47,
};

export const UserBanner: FC<IUser> = memo(
  ({ photo, name, email, gender, telegram, id }) => {
    const { followersText, followingText, followersCount, followingCount } =
      userBannerText;

    const {
      id: authUserId,
      name: authUserName,
      lastName: authLastName,
      email: authUserEmail,
      gender: authUserGender,
      telegram: authUserTelegram,
    } = useAppSelector(getUserSelector);

    const onOpenModal = () => {
      console.log('Modal open');
    };

    return (
      <Wrapper>
        <UserInfo>
          <Icon src={photo} alt='Twitter Logo' />
          <NameBlock>
            <Name>{id === authUserId ? `${authUserName} ${authLastName}` : name}</Name>
            {id === authUserId && (
              <IconEditProfile
                src={editProfile}
                alt='edit profile'
                onClick={onOpenModal}
              />
            )}
          </NameBlock>

          <Credentials>{id === authUserId ? authUserEmail : email}</Credentials>
          <Text>
            {authUserGender && (
              <Credentials>{id === authUserId ? authUserGender : gender}</Credentials>
            )}
            {(authUserTelegram !== '@telegram' || telegram !== '@telegram') && (
              <TextLink to='#'>
                {id === authUserId ? authUserTelegram : telegram}
              </TextLink>
            )}
          </Text>
          <Statistics>
            <Credentials>
              <b>{followingCount}</b> {followingText}
            </Credentials>
            <Credentials>
              <b>{followersCount}</b> {followersText}
            </Credentials>
          </Statistics>
        </UserInfo>
      </Wrapper>
    );
  },
);
