const oneMonth = 1;
const startDay = 0;
const validUserAge = 16;

export const getDays = (year: number, month: number) => {
  const totalDaysInMonth = new Date(year, month + oneMonth, startDay).getDate();

  return Array.from({ length: totalDaysInMonth }, (_, i) => i + 1);
};

export const getYears = () => {
  return Array.from(
    { length: new Date().getFullYear() - 1980 },
    (_, i) => `${new Date().getFullYear() - i - validUserAge}`,
  );
};
