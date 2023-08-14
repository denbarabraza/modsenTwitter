import { ChangeEvent, useState } from 'react';
import { FieldValues } from 'react-hook-form';

import mySaveIcon from '@/assets/photo.svg';
import { Button } from '@/components/Button/Button.tsx';
import { GenderSelector, Option } from '@/components/Form/style.ts';
import { Input } from '@/components/Input/Input.tsx';
import { gendersValue } from '@/constants/dataForSelectors.ts';
import { SchemaParamEnum, useFormHandler } from '@/hooks/useFormHandler.ts';
import { useAppDispatch, useAppSelector } from '@/hooks/useStoreControl.ts';
import { getUserSelector } from '@/store/selectors/userSelectors.ts';
import { setAlert } from '@/store/slice/appSlice.ts';

import {
  Credentials,
  Form,
  GenderBlock,
  Title,
  UserIcon,
  UserIconItem,
  Wrapper,
} from './styles';

export const ProfileEditModal = () => {
  const [gender, setGender] = useState<number>(0);

  const dispatch = useAppDispatch();
  const handleSetGender = (event: ChangeEvent<{ value: unknown }>) => {
    setGender(Number(event.target.value as string));
  };

  const {
    name: currentName,
    lastName: currentLastName,
    telegram: currentTelegram,
    gender: currentGender,
  } = useAppSelector(getUserSelector);

  const {
    errorEmail,
    errorName,
    errorPassword,
    errorNumber,
    errorConfirmPwd,
    errorTelegram,
    handleSubmit,
    register,
    isValid,
  } = useFormHandler(
    SchemaParamEnum.Edit,
    'email',
    'password',
    'confirmPwd',
    'name',
    'phone',
    'day',
    'month',
    'year',
    'gender',
    'telegram',
  );

  const handleFormSubmit = async ({ password, name, gender, telegram }: FieldValues) => {
    try {
      console.log(password, name, gender, telegram);
    } catch (e) {
      dispatch(
        setAlert({
          isVisible: true,
          message:
            errorEmail ||
            errorName ||
            errorPassword ||
            errorNumber ||
            errorConfirmPwd ||
            (e as Error).message,
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

      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          type='name'
          label='Name:'
          nameForValidate='name'
          placeholder={`${currentName} ${currentLastName}`}
          register={register}
          error={errorName}
        />
        <Input
          type='phone'
          label='Telegram'
          nameForValidate='telegram'
          placeholder={currentTelegram}
          register={register}
          error={errorTelegram}
        />
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

        <Input
          type='password'
          label='Create new password: '
          nameForValidate='password'
          placeholder='example12'
          register={register}
          error={errorPassword}
        />

        <Input
          type='password'
          label='Confirm new password:'
          nameForValidate='confirmPwd'
          placeholder='********'
          register={register}
          error={errorConfirmPwd}
        />
        <Button isValid={isValid} type='submit' title='Save' />
      </Form>
    </Wrapper>
  );
};
