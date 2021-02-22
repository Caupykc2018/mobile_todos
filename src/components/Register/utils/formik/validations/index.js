import * as Yup from 'yup';

export const formAddUserValidation = Yup.object().shape({
  login: Yup.string()
    .min(3, 'Login must have at least 3 characters')
    .max(16, 'The maximum login length is 16 characters')
    .required('Required!'),
  password: Yup.string()
    .min(8, 'Password must have at least 8 characters')
    .max(32, 'The maximum password length is 32 characters')
    .required('Required!'),
  repeatPassword: Yup.string()
    .oneOf(
      [Yup.ref('password')],
      'Repeat password must be identical to password',
    )
    .required('Required!'),
});
