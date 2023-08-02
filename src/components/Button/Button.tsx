import { FC, memo } from 'react';

import { ButtonItem } from '@/components/Button/style.ts';

interface IButton {
  type?: 'submit';
  title: string;
  isValid?: boolean;
  callBack?: () => void;
}

export const Button: FC<IButton> = memo(({ type, title, isValid, callBack }) => {
  return (
    <ButtonItem onClick={callBack} disabled={!isValid} type={undefined ?? type}>
      {title}
    </ButtonItem>
  );
});
