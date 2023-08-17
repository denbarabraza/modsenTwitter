import { FC, memo } from 'react';

import { IBurgerMenu } from './interface';
import { StyledBurgerMenu } from './style.ts';

export const BurgerMenu: FC<IBurgerMenu> = memo(({ open, setOpen }) => {
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <StyledBurgerMenu open={open} onClick={handleOpen}>
      <div />
      <div />
      <div />
    </StyledBurgerMenu>
  );
});
