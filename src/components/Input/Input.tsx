import { FC, memo, useState } from 'react';
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
}

export const Input: FC<IInput> = memo(
  ({ type, label, placeholder, error, register, nameForValidate }) => {
    const [typeInput, setTypeInput] = useState<string>(type);
    const showPasswordHandler = () => {
      setTypeInput(typeInput === 'password' ? 'text' : 'password');
    };

    const iconPas = typeInput === 'password' ? eye : noEye;

    return (
      <LabelInput>
        {label}
        <InputItem
          withError={!!error}
          {...register(nameForValidate)}
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
