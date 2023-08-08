import MyBookmarkSvg from '@/assets/bookmarks.svg';
import MyWhiteBookmarkSvg from '@/assets/bookmarks-white.svg';
import MyExploreSvg from '@/assets/explore.svg';
import MyWhiteExploreSvg from '@/assets/explore-white.svg';
import MyHomeSvg from '@/assets/home-outline.svg';
import MyWhiteHomeSvg from '@/assets/home-white.svg';
import MyListSvg from '@/assets/lists.svg';
import MyWhiteListSvg from '@/assets/lists-white.svg';
import MyMessageSvg from '@/assets/messages.svg';
import MyWhiteMessageSvg from '@/assets/messages-white.svg';
import MyMoreSvg from '@/assets/more.svg';
import MyWhiteMoreSvg from '@/assets/more-white.svg';
import MyNotificationSvg from '@/assets/notification.svg';
import MyWhiteNotificationSvg from '@/assets/notification-white.svg';
import MyProfileSvg from '@/assets/profile-fill.svg';
import MyWhiteProfileSvg from '@/assets/profile-white.svg';
import { PATH } from '@/constants/path.ts';

export const menuItems = [
  {
    text: ' Home',
    to: PATH.FEED,
    src: MyHomeSvg,
    srcAlt: MyWhiteHomeSvg,
  },
  {
    text: ' Explore',
    to: PATH.EXPLORE,
    src: MyExploreSvg,
    srcAlt: MyWhiteExploreSvg,
  },
  {
    text: ' Notifications',
    to: PATH.NOTIFICATIONS,
    src: MyNotificationSvg,
    srcAlt: MyWhiteNotificationSvg,
  },
  {
    text: ' Messages',
    to: PATH.MESSAGES,
    src: MyMessageSvg,
    srcAlt: MyWhiteMessageSvg,
  },
  {
    text: ' Bookmarks',
    to: PATH.BOOKMARKS,
    src: MyBookmarkSvg,
    srcAlt: MyWhiteBookmarkSvg,
  },
  {
    text: ' Lists',
    to: PATH.LISTS,
    src: MyListSvg,
    srcAlt: MyWhiteListSvg,
  },
  {
    text: ' Profile',
    to: PATH.PROFILE,
    src: MyProfileSvg,
    srcAlt: MyWhiteProfileSvg,
  },
  {
    text: ' More',
    to: PATH.MORE,
    src: MyMoreSvg,
    srcAlt: MyWhiteMoreSvg,
  },
];
