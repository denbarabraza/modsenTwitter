import { NavLinkItem } from '@/components/HeaderTest/style.ts';
import { navLinks } from '@/constants/navLinks.ts';

export const Header = () => {
  return (
    <div>
      {navLinks.map(link => (
        <NavLinkItem key={link.to} to={link.to}>
          {link.label}
        </NavLinkItem>
      ))}
    </div>
  );
};