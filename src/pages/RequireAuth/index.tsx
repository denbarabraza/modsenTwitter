import { Navigate } from 'react-router';
import { Outlet } from 'react-router-dom';

import { PATH } from '@/constants/path.ts';
import { useAppSelector } from '@/hooks/useStoreControl.ts';
import { isAuthSelector } from '@/store/selectors/userSelectors.ts';

export const RequireAuth = () => {
  const isAuth = useAppSelector(isAuthSelector);

  if (!isAuth) return <Navigate to={PATH.HOME} />;

  return <Outlet />;
};
