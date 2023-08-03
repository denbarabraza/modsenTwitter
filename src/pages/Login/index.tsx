import { FieldValues } from 'react-hook-form';

import { Button } from '@/components/Button/Button.tsx';
import { FormWrapper } from '@/components/Form';
import { Form } from '@/components/Form/style.ts';
import { Input } from '@/components/Input/Input.tsx';
import { PATH } from '@/constants/path.ts';
import { useFormHandler } from '@/hooks/useFormHandler.ts';

export const Login = () => {
  const { errorEmail, errorPassword, handleSubmit, isValid, register } = useFormHandler(
    'email',
    'password',
  );
  const onSubmit = (data: FieldValues) => {
    const { email, password } = data;

    console.log(email, password);
  };

  return (
    <FormWrapper
      linkTitle='Sign Up'
      linkPath={PATH.SIGN_UP}
      title='Log in to Twitter'
      questionText='Don`t you have an account yet?'
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
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
