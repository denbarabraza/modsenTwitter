import { useState } from 'react';
import { FieldValues } from 'react-hook-form';

import { Button } from '@/components/Button/Button.tsx';
import { FormWrapper } from '@/components/Form';
import { Form } from '@/components/Form/style.ts';
import { Input } from '@/components/Input/Input.tsx';
import { PATH } from '@/constants/path.ts';
import { useFormHandler } from '@/hooks/useFormHandler.ts';
import { useAppDispatch, useAppSelector } from '@/hooks/useStoreControl.ts';
import { getUserDataSelector } from '@/store/selectors/userSelectors.ts';
import { setAlert } from '@/store/slice/appSlice.ts';
import { logInWithEmailThunk, logInWithNumberThunk } from '@/store/thunks/auth';

export const Login = () => {
  const dispatch = useAppDispatch();
  const { isError } = useAppSelector(getUserDataSelector);

  const [nameValidate, setNameValidate] = useState<'phone' | 'email'>('email');
  const nameValidateRule = nameValidate === 'email' ? 'email' : 'phone';

  const { errorEmail, errorPassword, isValid, errorNumber, handleSubmit, register } =
    useFormHandler(nameValidateRule, 'password');

  const handleLogIn = async ({ email, password, phone }: FieldValues) => {
    try {
      (() => {
        if (nameValidate === 'email') {
          dispatch(logInWithEmailThunk({ email, password }));
        } else {
          dispatch(logInWithNumberThunk({ phone, password }));
        }
      })();
    } catch (e) {
      dispatch(
        setAlert({
          isVisible: true,
          message: isError || errorEmail || errorPassword || (e as Error).message,
        }),
      );
    }
  };

  return (
    <FormWrapper
      linkTitle='Sign Up'
      linkPath={PATH.SIGN_UP}
      title='Log in to Twitter'
      questionText='Don`t you have an account yet?'
    >
      <Form onSubmit={handleSubmit(handleLogIn)} noValidate>
        <Input
          type={nameValidateRule}
          label='Email or phone:'
          nameForValidate={nameValidateRule}
          placeholder='e@gmail.com'
          register={register}
          error={nameValidate === 'email' ? errorEmail : errorNumber}
          emailOrPhoneCheck={setNameValidate}
        />

        <Input
          type='password'
          label='Password:'
          nameForValidate='password'
          placeholder='example12'
          register={register}
          error={errorPassword}
        />

        <Button isValid={isValid} type='submit' title='Log In' />
      </Form>
    </FormWrapper>
  );
};
