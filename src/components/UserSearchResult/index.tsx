import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import myPhotoSvg from '@/assets/photo.svg';
import { Button } from '@/components/Button/Button.tsx';

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
  ({ name, email, photo, id }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
      navigate(`/profile/${id}`);
    };

    return (
      <Wrapper>
        <UserDescription>
          <Icon src={photo || myPhotoSvg} alt='userPhoto' onClick={handleNavigate} />
          <User>
            <UserName>{name}</UserName>
            <UserEmail>{email}</UserEmail>
          </User>
        </UserDescription>
        <ButtonBlock>
          <Button title='Follow' isValid />
        </ButtonBlock>
      </Wrapper>
    );
  },
);
