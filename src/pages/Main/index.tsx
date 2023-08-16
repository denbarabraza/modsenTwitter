import { Alert } from '@/components/Alert';
import { SideMenu } from '@/components/SideMenu';
import { SideSearch } from '@/components/SideSearch';
import { MainPages } from '@/pages';

import { MenuItemBlock, Wrapper } from './styles.ts';

export const Main = () => {
  return (
    <Wrapper>
      <MenuItemBlock>
        <SideMenu />
      </MenuItemBlock>
      <MainPages />
      <SideSearch />
      <Alert />
    </Wrapper>
  );
};
