import { FC, memo } from 'react';
import { useLocation } from 'react-router-dom';

import { MenuItemProps } from './interface.ts';
import { Icon, Wrapper } from './styled.ts';

export const MenuItem: FC<MenuItemProps> = memo(({ path, src, alt, text, id }) => {
  const { pathname } = useLocation();

  const isActive = pathname.startsWith(path.slice(0, 4));

  if (text === ' Profile') {
    return (
      <Wrapper to={`/profile/${id}`} isActive={isActive}>
        <Icon src={src} alt={alt} />
        {text}
      </Wrapper>
    );
  }

  return (
    <Wrapper to={path} isActive={isActive}>
      <Icon src={src} alt={alt} />
      {text}
    </Wrapper>
  );
});
