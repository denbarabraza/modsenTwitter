import { pureNumberPhone } from '../../src/utils/pureNumberPhone';

describe('pureNumberPhone', () => {
  it('pureNumberPhone should remove non-digit characters from the input number', () => {
    const inputNumber = '+1 (123) 456-7890';
    const expectedOutput = '11234567890';

    const result = pureNumberPhone(inputNumber);

    expect(result).toBe(expectedOutput);
  });

  it('pureNumberPhone should prepend "375" to numbers starting with "8"', () => {
    const inputNumber = '81234567890';
    const expectedOutput = '375234567890';

    const result = pureNumberPhone(inputNumber);

    expect(result).toBe(expectedOutput);
  });
});
