import { fireEvent, render } from '@testing-library/react';

import { Button } from '../../src/components/Button/Button';
import { RootProvider } from '../../src/components/RootProvider';

import '@testing-library/jest-dom';

describe('Button', () => {
  test('renders with correct props', () => {
    const { getByText } = render(
      <RootProvider>
        <Button isValid type='submit' title='Log In' />
      </RootProvider>,
    );
    const buttonElement = getByText('Log In');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('type', 'submit');
    expect(buttonElement).not.toHaveAttribute('disabled');
  });

  test('renders disabled button when isValid is false', () => {
    const { getByText } = render(
      <RootProvider>
        <Button isValid={false} type='submit' title='Log In' />
      </RootProvider>,
    );
    const buttonElement = getByText('Log In');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('type', 'submit');
    expect(buttonElement).toHaveAttribute('disabled');
  });

  test('calls callBack function when clicked', () => {
    const mockCallBack = jest.fn();
    const { getByText } = render(
      <RootProvider>
        <Button isValid type='submit' title='Log In' callBack={mockCallBack} />
      </RootProvider>,
    );
    const buttonElement = getByText('Log In');

    fireEvent.click(buttonElement);

    expect(mockCallBack).toHaveBeenCalled();
  });
});
