import { FC, memo } from 'react';

import { IBurgerMenu } from './interface';
import { StyledBurgerMenu } from './styled.ts';

export const BurgerMenu: FC<IBurgerMenu> = memo(({ open, handleMenuOpen }) => {
  const handleOpen = () => {
    handleMenuOpen();
  };

  return (
    <StyledBurgerMenu open={open} onClick={handleOpen}>
      <div />
      <div />
      <div />
    </StyledBurgerMenu>
  );
});
