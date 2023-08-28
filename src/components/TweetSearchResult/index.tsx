import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/Button';

import { ButtonBlock, User, UserName, Wrapper } from './styled.ts';
import { TweetSearchResultProps } from './type.ts';

export const TweetSearchResult: FC<TweetSearchResultProps> = memo(({ id, text }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/feed/${id}`);
  };

  return (
    <Wrapper>
      <User>
        <UserName>{text}</UserName>
      </User>
      <ButtonBlock>
        <Button title='Read' isValid callBack={handleNavigate} />
      </ButtonBlock>
    </Wrapper>
  );
});
