import { FC, memo, useState } from 'react';

import eye from '@/assets/eye.svg';
import noEye from '@/assets/eye-close.svg';
import { IInput } from '@/components/Input/interface.ts';

import { ErrorText, IconShowPassword, InputItem, LabelInput } from './styled.ts';

export const Input: FC<IInput> = memo(
  ({ type, label, placeholder, error, register, nameForValidate, emailOrPhoneCheck }) => {
    const [typeInput, setTypeInput] = useState<string>(type);
    const showPasswordHandler = () => {
      setTypeInput(typeInput === 'password' ? 'text' : 'password');
    };

    const iconPas = typeInput === 'password' ? eye : noEye;
    const validateEmailOrPhone = (value: string) => {
      /*
            *This regular expression checks if the input value satisfies one of the following conditions:
            1. Starts with an English letter (uppercase or lowercase).
            2. Contains the "@" symbol.
            It can be used to validate input where the first character should be a letter or the input should contain an "@" symbol.
            * */
      const isEmail = /^[A-Za-z]/.test(value) || /@/.test(value);
      /*
             *This regular expression validates a string based on the following conditions:
             1. The string should start with either a plus sign (+) or a digit (\d).
             2. After the initial character, the string should consist of one or more digits (\d) or hyphens (-).
             It can be used to ensure that the input matches a specific pattern, such as a phone number format that starts with a plus sign or a digit followed by digits or hyphens.
             * */
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
