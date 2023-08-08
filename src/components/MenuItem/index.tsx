import { FC, memo } from 'react';

import { Icon, Wrapper } from './style';
import { MenuItemProps } from './types';

export const MenuItem: FC<MenuItemProps> = memo(({ path, src, alt, text, id }) => {
  if (text === ' Profile') {
    return (
      <Wrapper to={`/profile/${id}`}>
        <Icon src={src} alt={alt} />
        {text}
      </Wrapper>
    );
  }

  return (
    <Wrapper to={path}>
      <Icon src={src} alt={alt} />
      {text}
    </Wrapper>
  );
});
