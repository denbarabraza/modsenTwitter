import React from 'react';
import { Navigate, RouteObject } from 'react-router';

import { PATH } from '@/constants/path';

const Home = React.lazy(() =>
  import('@/pages/Home').then(({ Home }) => ({ default: Home })),
);
const Login = React.lazy(() =>
  import('@/pages/Login').then(({ Login }) => ({ default: Login })),
);
const SignUp = React.lazy(() =>
  import('@/pages/SignUp').then(({ SignUp }) => ({ default: SignUp })),
);
const Profile = React.lazy(() =>
  import('@/pages/Profile').then(({ Profile }) => ({ default: Profile })),
);
const Feed = React.lazy(() =>
  import('@/pages/Feed').then(({ Feed }) => ({ default: Feed })),
);
const MainSignUp = React.lazy(() =>
  import('@/pages/MainSignUp').then(({ MainSignUp }) => ({ default: MainSignUp })),
);
const PageNotFound = React.lazy(() =>
  import('@/pages/PageNotFound').then(({ PageNotFound }) => ({ default: PageNotFound })),
);

export const routes: RouteObject[] = [
  { path: '/', element: <Navigate to={PATH.MAIN_SIGN_UP} /> },
  { path: PATH.MAIN_SIGN_UP, element: <MainSignUp /> },
  { path: PATH.HOME, element: <Home /> },
  { path: PATH.LOGIN, element: <Login /> },
  { path: PATH.SIGN_UP, element: <SignUp /> },
  { path: PATH.PROFILE, element: <Profile /> },
  { path: PATH.FEED, element: <Feed /> },
  { path: PATH.NOT_FOUND, element: <PageNotFound /> },
];
