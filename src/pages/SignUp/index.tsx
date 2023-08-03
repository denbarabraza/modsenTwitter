import { ChangeEvent, useState } from 'react';
import { FieldValues } from 'react-hook-form';

import { Button } from '@/components/Button/Button.tsx';
import { FormWrapper } from '@/components/Form/FormWrapper';
import {
  DateBirthBlock,
  DayYearSelector,
  Form,
  MonthSelector,
  Option,
  Selectors,
} from '@/components/Form/FormWrapper/style.ts';
import { Input } from '@/components/Input/Input.tsx';
import { monthNames } from '@/constants/monthNames.ts';
import { PATH } from '@/constants/path.ts';
import { useFormHandler } from '@/hooks/useFormHandler.ts';
import { getDays, getYears } from '@/utils/dateSelectors.ts';

export const SignUp = () => {
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);

  const handleSetMonth = (event: ChangeEvent<{ value: unknown }>) => {
    const monthIndex = monthNames.indexOf(event.target.value as string);

    setMonth(monthIndex);
  };

  const handleSetYear = (event: ChangeEvent<{ value: unknown }>) => {
    setYear(Number(event.target.value as string));
  };

  const {
    errorEmail,
    errorName,
    errorPassword,
    errorNumber,
    errorConfirmPwd,
    handleSubmit,
    isValid,
    register,
  } = useFormHandler(
    'email',
    'password',
    'confirmPwd',
    'name',
    'phoneNumber',
    'day',
    'month',
    'year',
  );
  const onSubmit = (data: FieldValues) => {
    const { email, password, name, phoneNumber, day, month, year } = data;

    console.log(email, password, name, phoneNumber, day, month, year);
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
          label='Name:'
          nameForValidate='name'
          placeholder='Ivan Ivanov'
          register={register}
          error={errorName}
        />

        <Input
          type='email'
          label='Email:'
          nameForValidate='email'
          placeholder='example@gmail.com'
          register={register}
          error={errorEmail}
        />

        <Input
          type='phoneNumber'
          label='Phone number:'
          nameForValidate='phoneNumber'
          placeholder='+375 (44) 111-22-33'
          register={register}
          error={errorNumber}
        />

        <Input
          type='password'
          label='Password:'
          nameForValidate='password'
          placeholder='example12'
          register={register}
          error={errorPassword}
        />

        <Input
          type='password'
          label='Confirm password:'
          nameForValidate='confirmPwd'
          placeholder='********'
          register={register}
          error={errorConfirmPwd}
        />
        <DateBirthBlock>
          Date of birth:
          <Selectors>
            <MonthSelector {...register('month')} onChange={handleSetMonth}>
              {monthNames.map(month => (
                <Option key={month} value={month}>
                  {month}
                </Option>
              ))}
            </MonthSelector>
            <DayYearSelector {...register('day')}>
              {getDays(year, month).map(day => (
                <Option key={day} value={day}>
                  {day}
                </Option>
              ))}
            </DayYearSelector>
            <DayYearSelector {...register('year')} onChange={handleSetYear}>
              {getYears().map(year => (
                <Option key={year} value={year}>
                  {year}
                </Option>
              ))}
            </DayYearSelector>
          </Selectors>
        </DateBirthBlock>

        <Button isValid={isValid} type='submit' title='Create account' />
      </Form>
    </FormWrapper>
  );
};
