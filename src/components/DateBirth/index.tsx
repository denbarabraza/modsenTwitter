import { ChangeEvent, FC } from 'react';
import { UseFormRegister } from 'react-hook-form';

import {
  DateBirthBlock,
  DayYearSelector,
  MonthSelector,
  Option,
  Selectors,
} from '@/components/Form/style.ts';
import { monthNames } from '@/constants/dataForSelectors.ts';
import { getDays, getYears } from '@/utils/dateSelectors.ts';

export interface IDateBirth {
  register: UseFormRegister<{ [x: string]: any }>;
  handleSetMonth: (event: ChangeEvent<{ value: unknown }>) => void;
  handleSetYear: (event: ChangeEvent<{ value: unknown }>) => void;
  year: number;
  month: number;
}

export const DateBirth: FC<IDateBirth> = ({
  register,
  handleSetMonth,
  year,
  month,
  handleSetYear,
}) => {
  return (
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
  );
};
