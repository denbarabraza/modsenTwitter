import { Alert } from '@/components/Alert';
import { SideMenu } from '@/components/SideMenu';
import { SideSearch } from '@/components/SideSearch';
import { MainPages } from '@/pages';

import { Wrapper } from './styles.ts';

export const Main = () => {
  return (
    <Wrapper>
      <SideMenu />
      <MainPages />
      <SideSearch />
      <Alert />
    </Wrapper>
  );
};
