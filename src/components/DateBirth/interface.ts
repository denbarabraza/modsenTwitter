import { ChangeEvent } from 'react';
import { UseFormRegister } from 'react-hook-form';

export interface IDateBirth {
  register: UseFormRegister<{ [x: string]: any }>;
  handleSetMonth: (event: ChangeEvent<{ value: unknown }>) => void;
  handleSetYear: (event: ChangeEvent<{ value: unknown }>) => void;
  year: number;
  month: number;
}
