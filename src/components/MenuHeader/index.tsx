import { useRef, useState } from 'react';

import { BurgerMenu } from '@/components/BurgerMenu';
import { StyledLink, StyledMenu } from '@/components/MenuHeader/styled.ts';
import { SideMenu } from '@/components/SideMenu';
import { useOnClickOutside } from '@/hooks/useOnClickOutside.ts';

export const MenuHeader = () => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  useOnClickOutside(node, () => setOpen(false));

  const handleMenuOpen = () => {
    setOpen(prev => !prev);
  };

  return (
    <div ref={node}>
      <StyledMenu open={open}>
        <StyledLink onClick={() => close()}>
          <SideMenu />
        </StyledLink>
      </StyledMenu>
      <BurgerMenu open={open} handleMenuOpen={handleMenuOpen} />
    </div>
  );
};
