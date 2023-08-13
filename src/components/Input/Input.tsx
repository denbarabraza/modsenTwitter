import { Dispatch, FC, memo, SetStateAction, useState } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import eye from '@/assets/eye.svg';
import noEye from '@/assets/eye-close.svg';

import { ErrorText, IconShowPassword, InputItem, LabelInput } from './style.ts';

interface IInput {
  label?: string;
  type: string;
  placeholder?: string;
  error?: string;
  register: UseFormRegister<FieldValues>;
  nameForValidate: string;
  emailOrPhoneCheck?: Dispatch<SetStateAction<'phone' | 'email'>>;
}

export const Input: FC<IInput> = memo(
  ({ type, label, placeholder, error, register, nameForValidate, emailOrPhoneCheck }) => {
    const [typeInput, setTypeInput] = useState<string>(type);
    const showPasswordHandler = () => {
      setTypeInput(typeInput === 'password' ? 'text' : 'password');
    };

    const iconPas = typeInput === 'password' ? eye : noEye;
    const validateEmailOrPhone = (value: string) => {
      const isEmail = /^[A-Za-z]/.test(value) || /@/.test(value);
      const isPhone = /^(\+|\d)[\d-]+$/.test(value);

      if (isEmail && emailOrPhoneCheck) {
        emailOrPhoneCheck('email');
      }
      if (isPhone && emailOrPhoneCheck) {
        emailOrPhoneCheck('phone');
      }

      return null;
    };

    const registerRule = {
      ...(nameForValidate === 'email' || nameForValidate === 'phone'
        ? {
            ...register(nameForValidate, {
              onChange: e => {
                validateEmailOrPhone(e.target.value);
              },
            }),
          }
        : {
            ...register(nameForValidate),
          }),
    };

    return (
      <LabelInput>
        {label}
        <InputItem
          withError={!!error}
          {...registerRule}
          type={typeInput}
          placeholder={placeholder}
        />
        {type === 'password' && (
          <IconShowPassword onClick={showPasswordHandler} src={iconPas} alt='icon eye' />
        )}
        {error && <ErrorText>{error}</ErrorText>}
      </LabelInput>
    );
  },
);
