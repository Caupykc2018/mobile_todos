import React from 'react';
import { Button, HelperText, TextInput } from 'react-native-paper';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../actions';
import { useFormik } from 'formik';
import { formLoginStyles } from './utils/styles';
import { formLoginValidation } from './utils/formik/validations';
import { formLoginInitialValues } from './utils/formik/initialValues';

export const FormLogin = () => {
  const dispatch = useDispatch();

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: formLoginInitialValues,
    validationSchema: formLoginValidation,
    onSubmit: (values) => dispatch(login(values.login, values.password)),
  });

  return (
    <View style={formLoginStyles.container}>
      <TextInput
        style={formLoginStyles.textField}
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
        style={formLoginStyles.textField}
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
      <View style={formLoginStyles.buttonContainer}>
        <Button
          style={formLoginStyles.buttonSubmit}
          mode="contained"
          onPress={handleSubmit}>
          Submit
        </Button>
      </View>
    </View>
  );
};
