import React from 'react';
import { Navigate, RouteObject } from 'react-router';

import { PATH } from '@/constants/path';

const Home = React.lazy(() =>
  import('@/pages/Home').then(({ Home }) => ({ default: Home })),
);

const Profile = React.lazy(() =>
  import('@/pages/Profile').then(({ Profile }) => ({ default: Profile })),
);
const Feed = React.lazy(() =>
  import('@/pages/Feed').then(({ Feed }) => ({ default: Feed })),
);
const Login = React.lazy(() =>
  import('@/pages/Login').then(({ Login }) => ({ default: Login })),
);
const SignUp = React.lazy(() =>
  import('@/pages/SignUp').then(({ SignUp }) => ({ default: SignUp })),
);
const Explore = React.lazy(() =>
  import('@/pages/Explore').then(({ Explore }) => ({ default: Explore })),
);
const Notifications = React.lazy(() =>
  import('@/pages/Notifications').then(({ Notifications }) => ({
    default: Notifications,
  })),
);
const Messages = React.lazy(() =>
  import('@/pages/Messages').then(({ Messages }) => ({
    default: Messages,
  })),
);
const Bookmarks = React.lazy(() =>
  import('@/pages/Bookmarks').then(({ Bookmarks }) => ({
    default: Bookmarks,
  })),
);
const Lists = React.lazy(() =>
  import('@/pages/Lists').then(({ Lists }) => ({
    default: Lists,
  })),
);
const More = React.lazy(() =>
  import('@/pages/More').then(({ More }) => ({
    default: More,
  })),
);
const PageNotFound = React.lazy(() =>
  import('@/pages/PageNotFound').then(({ PageNotFound }) => ({ default: PageNotFound })),
);

const {
  HOME,
  LOGIN,
  SIGN_UP,
  NOT_FOUND,
  PROFILE,
  FEED,
  EXPLORE,
  NOTIFICATIONS,
  MESSAGES,
  BOOKMARKS,
  LISTS,
  MORE,
} = PATH;

export const rootRoutes: RouteObject[] = [
  { path: '/', element: <Navigate to={PATH.HOME} /> },
  { path: HOME, element: <Home /> },
  { path: LOGIN, element: <Login /> },
  { path: SIGN_UP, element: <SignUp /> },
];

export const mainRoutes: RouteObject[] = [
  { path: NOT_FOUND, element: <PageNotFound /> },
  { path: PROFILE, element: <Profile /> },
  { path: FEED, element: <Feed /> },
  { path: EXPLORE, element: <Explore /> },
  { path: NOTIFICATIONS, element: <Notifications /> },
  { path: MESSAGES, element: <Messages /> },
  { path: BOOKMARKS, element: <Bookmarks /> },
  { path: LISTS, element: <Lists /> },
  { path: MORE, element: <More /> },
];
