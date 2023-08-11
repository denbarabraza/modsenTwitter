import { FieldValues } from 'react-hook-form';

import { Button } from '@/components/Button/Button.tsx';
import { FormWrapper } from '@/components/Form';
import { Form } from '@/components/Form/style.ts';
import { Input } from '@/components/Input/Input.tsx';
import { Loader } from '@/components/Loader';
import { PATH } from '@/constants/path.ts';
import { useFormHandler } from '@/hooks/useFormHandler.ts';
import { useAppDispatch, useAppSelector } from '@/hooks/useStoreControl.ts';
import { getUserDataSelector } from '@/store/selectors/userSelectors.ts';
import { setAlert } from '@/store/slice/appSlice.ts';
import { logInUserThunk } from '@/store/thunks/logInUserThunk.ts';

export interface ILogInFormInput {
  email: string;
  password: string;
}

export const Login = () => {
  const dispatch = useAppDispatch();
  const { isLoading, isError } = useAppSelector(getUserDataSelector);

  const { errorEmail, errorPassword, handleSubmit, isValid, register } = useFormHandler(
    'email',
    'password',
  );
  const handleLogIn = async ({ email, password }: FieldValues) => {
    try {
      dispatch(logInUserThunk({ email, password }));
    } catch (e) {
      dispatch(
        setAlert({
          isVisible: true,
          message: isError || errorEmail || errorPassword || (e as Error).message,
        }),
      );
    }
  };

  if (isLoading) return <Loader />;

  return (
    <FormWrapper
      linkTitle='Sign Up'
      linkPath={PATH.SIGN_UP}
      title='Log in to Twitter'
      questionText='Don`t you have an account yet?'
    >
      <Form onSubmit={handleSubmit(handleLogIn)}>
        <Input
          type='email'
          label='Email:'
          nameForValidate='email'
          placeholder='example@gmail.com'
          register={register}
          error={errorEmail}
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
