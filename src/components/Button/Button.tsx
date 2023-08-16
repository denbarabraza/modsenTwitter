import { FC, memo } from 'react';

import { IButton } from './interface.ts';
import { ButtonItem } from './style.ts';

export const Button: FC<IButton> = memo(({ type, title, isValid, callBack }) => {
  return (
    <ButtonItem onClick={callBack} disabled={!isValid} type={undefined ?? type}>
      {title}
    </ButtonItem>
  );
});
