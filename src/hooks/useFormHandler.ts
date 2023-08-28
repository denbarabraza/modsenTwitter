import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

export const schemaParam = {
  /*
          * This regular expression validates an email address based on the following conditions:
        1. The email address can be divided into two parts: the local part and the domain part.
        2. The local part can consist of alphanumeric characters, special characters (!#$%&'*+/=?^_`{|}~-), and dots (.) but cannot start or end with a dot.
        3. The domain part can consist of alphanumeric characters, hyphens (-), and dots (.) but must end with a valid top-level domain (e.g., .com, .org).
        4. The email address can also be enclosed in double quotes (") if it contains special characters or spaces within the local part.
        It can be used to ensure that an input string represents a valid email address.
          * */
  email: Yup.string()
    .required('No email provided')
    .email('Incorrect email')
    .matches(
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Incorrect email',
    ),
  password: Yup.string().required('No password provided').min(6, 'At least 6 characters'),
  confirmPwd: Yup.string()
    .required('Please confirm password')
    .oneOf([Yup.ref('password')], 'Passwords does not match'),
  /*
      * This regular expression validates a string based on the following conditions:
    1. The string should start with one or more English letters (uppercase or lowercase) using the character class [A-Za-z]+.
    2. After the first word, there should be a single space represented by \s.
    3. Following the space, there should be one or more English letters (uppercase or lowercase) representing the second word.
    It can be used to ensure that the input string consists of two words separated by a single space.
      * */
  name: Yup.string()
    .matches(/^[A-Za-z]+\s[A-Za-z]+$/, 'Incorrect email')
    .required('Enter your name')
    .min(3, 'At least 3 characters')
    .max(22, 'Maximum number of characters 22'),
  /*
    * This regular expression validates a phone number based on the following conditions:
  1. The phone number can start with an optional plus sign (+) followed by one to three digits, represented by (?:\+?\d{1,3})?
  2. After the optional plus sign and digits, there can be an optional space or hyphen, represented by [\s-]?
  3. Following the space or hyphen, there can be an optional opening parenthesis, represented by \(?
  4. After the optional opening parenthesis, there should be two or three digits, representing the area code, represented by \d{2,3}
  5. After the area code, there can be an optional closing parenthesis, represented by \)?
  6. Following the optional closing parenthesis, there can be optional spaces or hyphens, represented by [\s-]*?
  7. After the optional spaces or hyphens, there should be three digits, represented by [0-9]{3}
  8. Following the three digits, there can be optional spaces or hyphens, represented by [ \\-]*?
  9. After the optional spaces or hyphens, there should be two digits, represented by [0-9]{2}
  10. Following the two digits, there can be optional spaces or hyphens, represented by [ \\-]*?
  11. After the optional spaces or hyphens, there should be two digits, represented by [0-9]{2}
  It can be used to ensure that an input string represents a phone number in a specific format.
    * */
  phone: Yup.string()
    .matches(
      /^(?:\+?\d{1,3})?[\s-]?\(?\d{2,3}\)?[\s-]*?[0-9]{3}?[ \\-]*[0-9]{2}?[ \\-]*[0-9]{2}$/,
      'Invalid phone number format',
    )
    .required('Enter your phone number')
    .min(11, 'At least 11 characters'),
  day: Yup.string().required('Enter day'),
  month: Yup.string().required('Enter month'),
  year: Yup.string().required('Enter year'),
};

export const useFormHandler = (...keys: string[]) => {
  const param: any = {};
  const schemaParamEntries = Object.entries(schemaParam);

  keys.forEach(k =>
    schemaParamEntries.forEach(([key, value]) => {
      if (key === k) {
        param[k] = value;
      }
    }),
  );

  const formSchema = Yup.object().shape(param);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: 'onTouched',
  });

  const errorEmail = errors.email ? String(errors.email.message) : undefined;
  const errorPassword = errors.password ? String(errors.password.message) : undefined;
  const errorNumber = errors.phone ? String(errors.phone.message) : undefined;
  const errorConfirmPwd = errors.confirmPwd
    ? String(errors.confirmPwd.message)
    : undefined;
  const errorName = errors.name ? String(errors.name.message) : undefined;

  return {
    register,
    handleSubmit,
    reset,
    isValid,
    errorEmail,
    errorPassword,
    errorConfirmPwd,
    errorName,
    errorNumber,
  };
};
