import { Alert } from '@/components/Alert';
import { SideMenu } from '@/components/SideMenu';
import { SideSearch } from '@/components/SideSearch';
import { Wrapper } from '@/pages/Profile/styles.ts';

export interface IUser {
  id: string;
  name: string;
  nameLowercase: string;
  phone: string;
  surname: string;
  password: string;
  telegram: string;
  email: string;
  gender: string;
  token: string | undefined;
  photo: string;
}

export type ICreator = Pick<IUser, 'id' | 'email' | 'name' | 'photo'>;

export interface ITweet {
  id?: string;
  tweetId: string;
  creator: ICreator;
  text: string;
  date: number;
  image?: string;
  likes: string[];
}

export const Profile = () => {
  return (
    <Wrapper>
      <SideMenu />
      <div>
        <div>Header</div>
        <div>Banner</div>
        <div>User</div>
        <div>Create Twits</div>
        <div>Twits</div>
      </div>
      <SideSearch />
      <Alert />
    </Wrapper>
  );
};
