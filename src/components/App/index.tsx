import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, GlobalStyles } from '@/components/App/style.ts';
import { Loader } from '@/components/Loader';
import { useAppSelector } from '@/hooks/useStoreControl.ts';
import { RootPages } from '@/pages';
import { Main } from '@/pages/Main';
import { getAppLoadingSelector } from '@/store/selectors/appSelectors.ts';
import {
  getUserDataSelector,
  getUserSelector,
  isAuthSelector,
} from '@/store/selectors/userSelectors.ts';

export const App = () => {
  const isAuth = useAppSelector(isAuthSelector);
  const isUserLoading = useAppSelector(getUserDataSelector).isLoading;
  const isAppLoading = useAppSelector(getAppLoadingSelector);
  const { id } = useAppSelector(getUserSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      return;
    }
    navigate(`/profile/${id}`);
  }, [isAuth, id, navigate]);

  if (isAppLoading || isUserLoading) return <Loader />;

  return (
    <Container>
      <GlobalStyles />
      {!isAuth ? <RootPages /> : <Main />}
    </Container>
  );
};
