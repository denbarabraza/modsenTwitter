import {
  ChangeEvent,
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

import myImageSvg from '@/assets/image-blue.svg';
import myPhotoSvg from '@/assets/photo.svg';
import { Button } from '@/components/Button/Button.tsx';
import { Loader } from '@/components/Loader';
import { createNewTweet } from '@/firebase/helpers/createNewTweet.ts';
import { useAppDispatch, useAppSelector } from '@/hooks/useStoreControl.ts';
import { getModalStatusSelector } from '@/store/selectors/appSelectors.ts';
import { getUserSelector } from '@/store/selectors/userSelectors.ts';
import { ModalStatusEnum, setModalStatus } from '@/store/slice/appSlice.ts';
import { ITweet } from '@/types';

import {
  FileWrapper,
  Icon,
  ImageIcon,
  PreloadImage,
  TextArea,
  TextAreaWrapper,
  Tweet,
  TweetBlock,
  UploadFileLabel,
  UploadImage,
  Wrapper,
} from './style.ts';

export interface ICreateTweet {
  setTweets: Dispatch<SetStateAction<ITweet[]>>;
}

export const CreateTweetBlock: FC<ICreateTweet> = ({ setTweets }) => {
  const { id, email, name, photo, lastName } = useAppSelector(getUserSelector);
  const modalStatus = useAppSelector(getModalStatusSelector);
  const dispatch = useAppDispatch();

  const [tweetValue, setTweetValue] = useState<string>('');
  const [image, setImage] = useState<File>();
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCreateTweet = async (e: FormEvent) => {
    e.preventDefault();
    const newTweet = await createNewTweet({
      email,
      id,
      image,
      name,
      lastName,
      photo,
      tweetValue,
    });

    setTweets(prev => [newTweet, ...prev]);

    setTweetValue('');
    setImage(undefined);
    if (modalStatus === ModalStatusEnum.CreateTweet) {
      dispatch(setModalStatus(ModalStatusEnum.Closed));
    }
  };

  const handleChangeInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTweetValue(e.target.value);
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files) {
      setIsLoading(true);
      const storage = getStorage();
      const storageRef = ref(storage, 'some-child');

      uploadBytes(storageRef, files[0]).then(() => {
        setIsLoading(false);
      });

      setImage(files[0]);
      setImageUrl(URL.createObjectURL(files[0]));
    }
  };

  useEffect(() => {
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [imageUrl]);

  return (
    <Wrapper>
      <Icon src={photo || myPhotoSvg} alt='Photo' />
      <Tweet onSubmit={handleCreateTweet}>
        <TextAreaWrapper>
          <TextArea
            placeholder='What`s happening'
            value={tweetValue}
            onChange={handleChangeInput}
          />
          {isLoading && <Loader />}
          {!isLoading && image && <PreloadImage src={imageUrl} alt='Image preload' />}
          <FileWrapper>
            <UploadFileLabel htmlFor='file'>
              <UploadImage
                type='file'
                id='file'
                hidden
                accept='image/*'
                onChange={handleFileChange}
              />
              <ImageIcon src={myImageSvg} alt='Image' />
            </UploadFileLabel>
          </FileWrapper>
        </TextAreaWrapper>
        <TweetBlock>
          <Button title='Tweet' isValid />
        </TweetBlock>
      </Tweet>
    </Wrapper>
  );
};
