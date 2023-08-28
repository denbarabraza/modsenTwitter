import { ChangeEvent, FC, memo, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import mySaveIcon from '@/assets/userPhoto.svg';
import { Button } from '@/components/Button';
import { GenderSelector, Option } from '@/components/Form/styled.ts';
import { IProfileEditModal } from '@/components/ProfileEditModal/interface.ts';
import { validationErrors, validationPatterns } from '@/constants/dataForEditModal.ts';
import { gendersValue } from '@/constants/dataForSelectors.ts';
import { FirebaseCollections } from '@/constants/firebase.ts';
import { ModalStatusEnum } from '@/constants/modalStatus.ts';
import { getTweetsByUserId } from '@/firebase/api/getData.ts';
import { updateDocument, updateUser } from '@/firebase/helpers/updateData.ts';
import { useAppDispatch, useAppSelector } from '@/hooks/useStoreControl.ts';
import { getUserSelector } from '@/store/selectors/userSelectors.ts';
import { setAlert, setModalStatus } from '@/store/slice/appSlice.ts';
import { setUpdateUser } from '@/store/slice/userSlice.ts';

import {
  Credentials,
  EditItem,
  ErrorText,
  Form,
  GenderBlock,
  InputItem,
  Title,
  UserIcon,
  UserIconItem,
  Wrapper,
} from './styled.ts';

export const ProfileEditModal: FC<IProfileEditModal> = memo(({ handleGetUserTweets }) => {
  const [, setGender] = useState<number>(0);

  const dispatch = useAppDispatch();
  const handleSetGender = (event: ChangeEvent<{ value: unknown }>) => {
    setGender(Number(event.target.value as string));
  };

  const {
    name: currentName,
    lastName: currentLastName,
    telegram: currentTelegram,
    gender: currentGender,
    id,
  } = useAppSelector(getUserSelector);

  const { namePattern } = validationPatterns;
  const { nameError, surnameError, passwordError } = validationErrors;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });

  const handleFormSubmit: SubmitHandler<FieldValues> = async ({
    gender,
    name,
    password,
    surname,
    telegram,
  }) => {
    try {
      let updatedTelegram = telegram;

      if (!telegram.includes('@')) {
        updatedTelegram = `@${telegram}`;
      }

      await updateUser({
        gender: gender || currentGender,
        name: name || currentName,
        password,
        lastName: surname || currentLastName,
        telegram: updatedTelegram || currentTelegram,
      });
      if (password) {
        dispatch(
          setAlert({
            isVisible: true,
            message: 'You need to re-signin to update password',
          }),
        );
      }
      dispatch(
        setUpdateUser({
          gender: gender || currentGender,
          name: name || currentName,
          lastName: surname || currentLastName,
          telegram: telegram || currentTelegram,
        }),
      );
      const userTweets = await getTweetsByUserId('creator.id', id);

      await Promise.all(
        userTweets.map(item =>
          updateDocument({
            collection: FirebaseCollections.Tweets,
            id: item.tweetId,
            newDoc: {
              ...item,
              creator: {
                ...item.creator,
                name: name || currentName,
                lastName: surname || currentLastName,
              },
            },
          }),
        ),
      );
      handleGetUserTweets();

      dispatch(setModalStatus(ModalStatusEnum.Closed));
    } catch (e) {
      dispatch(
        setAlert({
          isVisible: true,
          message: 'The user`s data has not been updated...',
        }),
      );
    }
  };

  return (
    <Wrapper>
      <Title>Edit User Data</Title>
      <UserIconItem>
        <UserIcon src={mySaveIcon} />
      </UserIconItem>
      <Form onSubmit={handleSubmit(handleFormSubmit)} data-cy='formEditProfile'>
        <EditItem>
          <Credentials>Name:</Credentials>
          <InputItem
            data-cy='nameField'
            placeholder={currentName}
            type='text'
            {...register('name', { minLength: 3, pattern: namePattern })}
          />
          {errors.name && <ErrorText>{nameError}</ErrorText>}
        </EditItem>
        <EditItem>
          <Credentials>Surname:</Credentials>
          <InputItem
            data-cy='nameField'
            placeholder={currentLastName}
            type='text'
            {...register('surname', { minLength: 3, pattern: namePattern })}
          />
          {errors.surname && <ErrorText>{surnameError}</ErrorText>}
        </EditItem>
        <EditItem>
          <Credentials>Create new password: </Credentials>
          <InputItem
            placeholder='example12'
            type='text'
            {...register('password', {
              minLength: 6,
            })}
          />
          {errors.password && <ErrorText>{passwordError}</ErrorText>}
        </EditItem>
        <EditItem>
          <Credentials>Telegram:</Credentials>
          <InputItem
            data-cy='telegramField'
            placeholder={currentTelegram}
            type='text'
            {...register('telegram')}
          />
        </EditItem>

        <GenderBlock>
          <Credentials>Gender</Credentials>
          <GenderSelector {...register('gender')} onChange={handleSetGender}>
            {gendersValue.map(gender => (
              <Option key={gender} value={gender}>
                {gender}
              </Option>
            ))}
          </GenderSelector>
        </GenderBlock>
        <Button isValid type='submit' title='Save' />
      </Form>
    </Wrapper>
  );
});
