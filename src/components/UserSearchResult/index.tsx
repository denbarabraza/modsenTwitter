import { FC, memo } from 'react';

import myPhotoSvg from '@/assets/userPhoto.svg';
import { Button } from '@/components/Button';
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
} from './styled.ts';
import { IUserSearchResultProps } from './type.ts';

export const UserSearchResult: FC<IUserSearchResultProps> = memo(
  ({ name, telegram, photo, lastName }) => {
    const dispatch = useAppDispatch();

    const handleFollow = () => {
      dispatch(
        setAlert({
          isVisible: true,
          message: `You have subscribed to a user ${name} ${lastName}`,
        }),
      );
    };

    return (
      <Wrapper>
        <UserDescription>
          <Icon src={photo || myPhotoSvg} alt='userPhoto' />
          <User>
            <UserName>
              {name} {lastName}
            </UserName>
            {telegram && <UserEmail>{telegram}</UserEmail>}
          </User>
        </UserDescription>
        <ButtonBlock>
          <Button title='Follow' isValid callBack={handleFollow} />
        </ButtonBlock>
      </Wrapper>
    );
  },
);
