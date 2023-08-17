import { FC, memo, useState } from 'react';

import eye from '@/assets/eye.svg';
import noEye from '@/assets/eye-close.svg';
import { IInput } from '@/components/Input/interface.ts';

import { ErrorText, IconShowPassword, InputItem, LabelInput } from './style.ts';

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
          data-cy='input'
          {...registerRule}
          type={typeInput}
          placeholder={placeholder}
        />
        {type === 'password' && (
          <IconShowPassword onClick={showPasswordHandler} src={iconPas} alt='icon eye' />
        )}
        {error && <ErrorText data-cy='errorText'>{error}</ErrorText>}
      </LabelInput>
    );
  },
);
