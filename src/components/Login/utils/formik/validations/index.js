import * as Yup from 'yup';

export const formLoginValidation = Yup.object().shape({
  login: Yup.string().required('Required!'),
  password: Yup.string().required('Required!'),
});
