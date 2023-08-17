import * as Yup from 'yup';

import { schemaParam } from '../../src/hooks/useFormHandler';

describe('schemaParam', () => {
  test('validates email correctly', () => {
    const schema = Yup.object().shape({
      email: schemaParam.email,
    });

    expect(schema.isValidSync({ email: '' })).toBe(false);
    expect(schema.isValidSync({ email: 'invalid-email' })).toBe(false);
    expect(schema.isValidSync({ email: 'valid@example.com' })).toBe(true);
  });

  test('validates password correctly', () => {
    const schema = Yup.object().shape({
      password: schemaParam.password,
    });

    expect(schema.isValidSync({ password: '' })).toBe(false);
    expect(schema.isValidSync({ password: 'short' })).toBe(false);
    expect(schema.isValidSync({ password: 'validpassword' })).toBe(true);
  });
  test('validates confirmPwd correctly', () => {
    const schema = Yup.object().shape({
      confirmPwd: schemaParam.confirmPwd,
    });

    expect(schema.isValidSync({ confirmPwd: '' })).toBe(false);
    expect(schema.isValidSync({ confirmPwd: 'password' })).toBe(false);
    expect(schema.isValidSync({ confirmPwd: 'password123', password: 'password' })).toBe(
      false,
    );
  });

  test('validates name correctly', () => {
    const schema = Yup.object().shape({
      name: schemaParam.name,
    });

    expect(schema.isValidSync({ name: '' })).toBe(false);
    expect(schema.isValidSync({ name: 'Den' })).toBe(false);
    expect(schema.isValidSync({ name: 'Den Bar' })).toBe(true);
  });

  test('validates phone correctly', () => {
    const schema = Yup.object().shape({
      phone: schemaParam.phone,
    });

    expect(schema.isValidSync({ phone: '' })).toBe(false);
    expect(schema.isValidSync({ phone: '1234567890' })).toBe(false);
    expect(schema.isValidSync({ phone: '+1234567890' })).toBe(true);
  });

  test('validates day correctly', () => {
    const schema = Yup.object().shape({
      day: schemaParam.day,
    });

    expect(schema.isValidSync({ day: '' })).toBe(false);
    expect(schema.isValidSync({ day: '31' })).toBe(true);
  });

  test('validates month correctly', () => {
    const schema = Yup.object().shape({
      month: schemaParam.month,
    });

    expect(schema.isValidSync({ month: '' })).toBe(false);
    expect(schema.isValidSync({ month: 'January' })).toBe(true);
  });

  test('validates year correctly', () => {
    const schema = Yup.object().shape({
      year: schemaParam.year,
    });

    expect(schema.isValidSync({ year: '' })).toBe(false);
    expect(schema.isValidSync({ year: '2023' })).toBe(true);
  });
});
