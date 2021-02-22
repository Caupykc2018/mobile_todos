import * as Yup from 'yup';

export const editBarValidation = Yup.object().shape({
  title: Yup.string()
    .trim()
    .min(1, 'Title cannot be less than 1 letter')
    .required('Title cannot be less than 1 letter'),
});
