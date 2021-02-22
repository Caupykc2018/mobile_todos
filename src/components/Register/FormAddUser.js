import React from 'react';
import { Button, HelperText, TextInput } from 'react-native-paper';
import { View } from 'react-native';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../actions';
import { formAddUserStyles } from './utils/styles';
import { formAddUserValidation } from './utils/formik/validations';
import { formAddUserInitialValues } from './utils/formik/initialValues';

export const FormAddUser = () => {
  const dispatch = useDispatch();

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: formAddUserInitialValues,
    validationSchema: formAddUserValidation,
    onSubmit: (values) => {
      dispatch(register(values.login, values.password));
    },
  });

  return (
    <View style={formAddUserStyles.container}>
      <TextInput
        style={formAddUserStyles.textField}
        value={values.login}
        error={Boolean(errors.login)}
        label="Login"
        mode="outlined"
        onChangeText={handleChange('login')}
      />
      {errors.login && (
        <HelperText visible type="Error">
          {errors.login}
        </HelperText>
      )}
      <TextInput
        style={formAddUserStyles.textField}
        value={values.password}
        error={Boolean(errors.password)}
        label="Password"
        mode="outlined"
        onChangeText={handleChange('password')}
        secureTextEntry
      />
      {errors.password && (
        <HelperText visible type="Error">
          {errors.password}
        </HelperText>
      )}
      <TextInput
        style={formAddUserStyles.textField}
        value={values.repeatPassword}
        error={Boolean(errors.repeatPassword)}
        label="Password"
        mode="outlined"
        onChangeText={handleChange('repeatPassword')}
        secureTextEntry
      />
      {errors.repeatPassword && (
        <HelperText visible type="Error">
          {errors.repeatPassword}
        </HelperText>
      )}
      <View style={formAddUserStyles.buttonContainer}>
        <Button
          style={formAddUserStyles.buttonSubmit}
          mode="contained"
          onPress={handleSubmit}>
          Submit
        </Button>
      </View>
    </View>
  );
};
