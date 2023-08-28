import { FC, memo } from 'react';

import editProfile from '@/assets/editProfile.svg';
import { IUserInProfile } from '@/components/UserInProfile/type.ts';
import { ModalStatusEnum } from '@/constants/modalStatus.ts';
import { useAppDispatch, useAppSelector } from '@/hooks/useStoreControl.ts';
import { getUserSelector } from '@/store/selectors/userSelectors.ts';
import { setModalStatus } from '@/store/slice/appSlice.ts';

import { userBannerText } from './config.ts';
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
} from './styled.ts';

export const UserInProfile: FC<IUserInProfile> = memo(
  ({ photo, name, email, gender, telegram, id }) => {
    const dispatch = useAppDispatch();
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

    const onEditUser = () => {
      dispatch(setModalStatus(ModalStatusEnum.EditProfile));
    };

    return (
      <Wrapper data-cy='userInfoBlock'>
        <UserInfo data-cy='userInfo'>
          <Icon src={photo} alt='Twitter Logo' />
          <NameBlock data-cy='nameBlock'>
            <Name data-cy='nameItem'>
              {id === authUserId ? `${authUserName} ${authLastName}` : name}
            </Name>
            {id === authUserId && (
              <IconEditProfile
                data-cy='editIcon'
                src={editProfile}
                alt='edit profile'
                onClick={onEditUser}
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
