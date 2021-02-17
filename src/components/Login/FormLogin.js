import React from 'react';
import { Button, HelperText, TextInput } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../actions';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const schemaValidation = Yup.object().shape({
  login: Yup.string().required('Required!'),
  password: Yup.string().required('Required!'),
});

export const FormLogin = () => {
  const dispatch = useDispatch();

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: schemaValidation,
    onSubmit: (values) => dispatch(login(values.login, values.password)),
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
