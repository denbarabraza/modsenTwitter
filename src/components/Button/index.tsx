import { FC, memo } from 'react';

import { IButton } from './interface.ts';
import { ButtonItem } from './styled.ts';

export const Button: FC<IButton> = memo(({ type, title, isValid, callBack }) => {
  return (
    <ButtonItem
      data-cy='button'
      onClick={callBack}
      disabled={!isValid}
      type={undefined ?? type}
    >
      {title}
    </ButtonItem>
  );
});
