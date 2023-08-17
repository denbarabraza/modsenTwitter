export const pureNumberPhone = (number: string) => {
  if (number.startsWith('8')) {
    return `375${number.slice(2)}`;
  }

  return number.replace(/\D/g, '');
};
