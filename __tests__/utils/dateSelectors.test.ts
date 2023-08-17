import { getDays, getYears } from '../../src/utils/dateSelectors';

describe('dateSelectors', () => {
  const validUserAge = 16;

  it('getYears should return an array of years', () => {
    const years = getYears();

    expect(Array.isArray(years)).toBe(true);

    expect(years.length).toBe(new Date().getFullYear() - 1980);

    const currentYear = new Date().getFullYear();
    const expectedYears = Array.from(
      { length: currentYear - 1980 },
      (_, i) => `${currentYear - i - validUserAge}`,
    );

    expect(years).toEqual(expectedYears);
  });

  it('getDays should return an array of days for a given year and month', () => {
    const year = 2023;
    const month = 0;

    const days = getDays(year, month);

    expect(Array.isArray(days)).toBe(true);

    const totalDaysInMonth = new Date(year, month + 1, 0).getDate();

    expect(days.length).toBe(totalDaysInMonth);

    const expectedDays = Array.from({ length: totalDaysInMonth }, (_, i) => i + 1);

    expect(days).toEqual(expectedDays);
  });
});
