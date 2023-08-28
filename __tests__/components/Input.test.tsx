import { fireEvent, render, screen } from '@testing-library/react';

import { Input } from '../../src/components/Input';
import { Theme } from '../../src/components/Theme';
import { ThemeEnum } from '../../src/theme/types';

import '@testing-library/jest-dom';

describe('Input component', () => {
  const mockRegister = jest.fn();
  const mockEmailOrPhoneCheck = jest.fn();

  beforeEach(() => {
    render(
      <Theme theme={ThemeEnum.Dark}>
        <Input
          type='name'
          label='Name:'
          nameForValidate='name'
          placeholder='Ivan Ivanov'
          register={mockRegister}
          emailOrPhoneCheck={mockEmailOrPhoneCheck}
        />
      </Theme>,
    );
  });

  test('renders input component with label and placeholder', () => {
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Ivan Ivanov')).toBeInTheDocument();
  });

  test('toggles password visibility when show/hide password icon is clicked', () => {
    render(
      <Theme theme={ThemeEnum.Dark}>
        <Input
          type='password'
          label='Password:'
          nameForValidate='password'
          placeholder='Enter password'
          register={mockRegister}
        />
      </Theme>,
    );

    const inputElement = screen.getByRole('textbox') as HTMLInputElement;
    const showPasswordIcon = screen.getByAltText('icon eye');

    expect(inputElement.type).toBe('text');

    fireEvent.click(showPasswordIcon);
    expect(inputElement.type).toBe('text');

    fireEvent.click(showPasswordIcon);
    expect(inputElement.type).toBe('text');
  });
});
