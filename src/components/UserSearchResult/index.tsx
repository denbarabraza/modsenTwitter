import { FC, memo } from 'react';

import myPhotoSvg from '@/assets/photo.svg';
import { Button } from '@/components/Button/Button.tsx';
import { useAppDispatch } from '@/hooks/useStoreControl.ts';
import { setAlert } from '@/store/slice/appSlice.ts';

import {
  ButtonBlock,
  Icon,
  User,
  UserDescription,
  UserEmail,
  UserName,
  Wrapper,
} from './styles';
import { IUserSearchResultProps } from './types';

export const UserSearchResult: FC<IUserSearchResultProps> = memo(
  ({ name, email, photo }) => {
    const dispatch = useAppDispatch();

    const handleFollow = () => {
      dispatch(
        setAlert({
          isVisible: true,
          message: `You have subscribed to a user ${name}`,
        }),
      );
    };

    return (
      <Wrapper>
        <UserDescription>
          <Icon src={photo || myPhotoSvg} alt='userPhoto' />
          <User>
            <UserName>{name}</UserName>
            <UserEmail>{email}</UserEmail>
          </User>
        </UserDescription>
        <ButtonBlock>
          <Button title='Follow' isValid callBack={handleFollow} />
        </ButtonBlock>
      </Wrapper>
    );
  },
);
