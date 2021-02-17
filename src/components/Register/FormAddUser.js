import React from 'react';
import { Button, HelperText, TextInput } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../actions';

const schemaValidation = Yup.object().shape({
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

export const FormAddUser = () => {
  const dispatch = useDispatch();

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      login: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: schemaValidation,
    onSubmit: (values) => {
      dispatch(register(values.login, values.password));
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textField}
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
        style={styles.textField}
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
        style={styles.textField}
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
      <View style={styles.buttonContainer}>
        <Button
          style={styles.buttonSubmit}
          mode="contained"
          onPress={handleSubmit}>
          Submit
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: 'white',
    width: '80%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'gray',
    padding: 20,
    borderRadius: 5,
  },
  textField: {
    backgroundColor: 'white',
  },
  container: {
    marginBottom: 20,
  },
  buttonSubmit: {
    width: '50%',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
});
