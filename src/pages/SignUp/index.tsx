import { ChangeEvent, useState } from 'react';
import { FieldValues } from 'react-hook-form';

import { Button } from '@/components/Button/Button.tsx';
import { DateBirth } from '@/components/DateBirth';
import { FormWrapper } from '@/components/Form';
import { Form } from '@/components/Form/style.ts';
import { Input } from '@/components/Input/Input.tsx';
import { monthNames } from '@/constants/dataForSelectors.ts';
import { PATH } from '@/constants/path.ts';
import { useFormHandler } from '@/hooks/useFormHandler.ts';
import { useAppDispatch } from '@/hooks/useStoreControl.ts';
import { setAlert } from '@/store/slice/appSlice.ts';
import { signUpWithEmailThunk } from '@/store/thunks/auth';

export const SignUp = () => {
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);

  const dispatch = useAppDispatch();

  const handleSetMonth = (event: ChangeEvent<{ value: unknown }>) => {
    const monthIndex = monthNames.indexOf(event.target.value as string);

    setMonth(monthIndex);
  };

  const handleSetYear = (event: ChangeEvent<{ value: unknown }>) => {
    setYear(Number(event.target.value as string));
  };

  const {
    errorEmail,
    errorName,
    errorPassword,
    errorNumber,
    errorConfirmPwd,
    handleSubmit,
    isValid,
    register,
  } = useFormHandler(
    'email',
    'password',
    'confirmPwd',
    'name',
    'phone',
    'day',
    'month',
    'year',
  );
  const handleSignUpFormSubmit = async ({
    email,
    password,
    name,
    phone,
    day,
    month,
    year,
  }: FieldValues) => {
    try {
      dispatch(
        signUpWithEmailThunk({
          email,
          password,
          name,
          phone,
          day,
          month,
          year,
        }),
      );
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
    <FormWrapper
      linkTitle='Login In'
      linkPath={PATH.LOGIN}
      title='Create an account'
      questionText='Already have an account?'
    >
      <Form onSubmit={handleSubmit(handleSignUpFormSubmit)}>
        <Input
          type='name'
          label='Name:'
          nameForValidate='name'
          placeholder='Ivan Ivanov'
          register={register}
          error={errorName}
        />

        <Input
          type='email'
          label='Email:'
          nameForValidate='email'
          placeholder='example@gmail.com'
          register={register}
          error={errorEmail}
        />

        <Input
          type='phone'
          label='Phone number:'
          nameForValidate='phone'
          placeholder='+375 (44) 111-22-33'
          register={register}
          error={errorNumber}
        />

        <Input
          type='password'
          label='Password:'
          nameForValidate='password'
          placeholder='example12'
          register={register}
          error={errorPassword}
        />

        <Input
          type='password'
          label='Confirm password:'
          nameForValidate='confirmPwd'
          placeholder='********'
          register={register}
          error={errorConfirmPwd}
        />
        <DateBirth
          register={register}
          handleSetMonth={handleSetMonth}
          handleSetYear={handleSetYear}
          year={year}
          month={month}
        />

        <Button isValid={isValid} type='submit' title='Create account' />
      </Form>
    </FormWrapper>
  );
};
