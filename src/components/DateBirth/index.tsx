import { FC, memo } from 'react';

import { IDateBirth } from '@/components/DateBirth/interface.ts';
import { monthNames } from '@/constants/dataForSelectors.ts';
import { getDays, getYears } from '@/utils/dateSelectors.ts';

import {
  DateBirthBlock,
  DayYearSelector,
  MonthSelector,
  Option,
  Selectors,
} from './styled.ts';

export const DateBirth: FC<IDateBirth> = memo(
  ({ register, handleSetMonth, year, month, handleSetYear }) => {
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
  },
);
