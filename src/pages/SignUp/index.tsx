import { FieldValues } from 'react-hook-form';

import { Button } from '@/components/Button/Button.tsx';
import { FormWrapper } from '@/components/Form/FormWrapper';
import { Form } from '@/components/Form/FormWrapper/style.ts';
import { Input } from '@/components/Input/Input.tsx';
import { PATH } from '@/constants/path.ts';
import { useFormHandler } from '@/hooks/useFormHandler.ts';

export const SignUp = () => {
  const {
    errorEmail,
    errorName,
    errorPassword,
    errorNumber,
    errorConfirmPwd,
    handleSubmit,
    isValid,
    register,
  } = useFormHandler('email', 'password', 'confirmPwd', 'name', 'phoneNumber');
  const onSubmit = (data: FieldValues) => {
    const { email, password, name, phoneNumber } = data;

    console.log(email, password, name, phoneNumber);
  };

  return (
    <FormWrapper
      linkTitle='Login In'
      linkPath={PATH.LOGIN}
      title='Create an account'
      questionText='Already have an account?'
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='name'
          label='Name'
          nameForValidate='name'
          placeholder='Ivan Ivanov'
          register={register}
          error={errorName}
        />

        <Input
          type='email'
          label='Email'
          nameForValidate='email'
          placeholder='example@gmail.com'
          register={register}
          error={errorEmail}
        />

        <Input
          type='phoneNumber'
          label='Phone number'
          nameForValidate='phoneNumber'
          placeholder='+375 (44) 111-22-33'
          register={register}
          error={errorNumber}
        />

        <Input
          type='password'
          label='Password'
          nameForValidate='password'
          placeholder='example12'
          register={register}
          error={errorPassword}
        />

        <Input
          type='password'
          label='Confirm password'
          nameForValidate='confirmPwd'
          placeholder='********'
          register={register}
          error={errorConfirmPwd}
        />

        <Button isValid={isValid} type='submit' title='Create account' />
      </Form>
    </FormWrapper>
  );
};
