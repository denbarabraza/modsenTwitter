import { Dispatch, SetStateAction } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export interface IInput {
  label?: string;
  type: string;
  placeholder?: string;
  error?: string;
  register: UseFormRegister<FieldValues>;
  nameForValidate: string;
  emailOrPhoneCheck?: Dispatch<SetStateAction<'phone' | 'email'>>;
}
