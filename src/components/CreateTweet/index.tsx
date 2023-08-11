import { ChangeEvent, Dispatch, FC, FormEvent, SetStateAction, useState } from 'react';

import myImageSvg from '@/assets/image-blue.svg';
import myPhotoSvg from '@/assets/photo.svg';
import { Button } from '@/components/Button/Button.tsx';
import { Loader } from '@/components/Loader';
import { useAppSelector } from '@/hooks/useStoreControl.ts';
import { getUserSelector } from '@/store/selectors/userSelectors.ts';
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
  UploadFile,
  UploadFileLabel,
  Wrapper,
} from './style.ts';

export interface ICreateTweet {
  setTweets: Dispatch<SetStateAction<ITweet[]>>;
}

export const CreateTweetBlock: FC<ICreateTweet> = ({ setTweets }) => {
  const { photo } = useAppSelector(getUserSelector);

  const [tweetValue, setTweetValue] = useState<string>('');
  const [image] = useState<File>();
  const [isLoading] = useState<boolean>(false);

  const handleCreateTweet = (e: FormEvent) => {
    console.log('handleCreateTweet');
    setTweetValue('');
  };

  const handleChangeInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTweetValue(e.target.value);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
  };

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
          {!isLoading && image && (
            <PreloadImage src={URL.createObjectURL(image)} alt='Image preload' />
          )}
          <FileWrapper>
            <UploadFileLabel htmlFor='file'>
              <UploadFile
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
