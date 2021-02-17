import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { FormLogin } from '../components/Login/FormLogin';

export const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.containerTitle}>
          <Title style={styles.title}>Login</Title>
        </View>
        <FormLogin />
        <View style={styles.containerButton}>
          <Button
            style={styles.buttonRegister}
            mode="flat"
            color="black"
            onPress={() => navigation.navigate('register')}>
            Create account
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTitle: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 15,
  },
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
  containerTextFields: {
    marginBottom: 20,
  },
  buttonSubmit: {
    width: '50%',
  },
  containerButton: {
    alignItems: 'center',
  },
  buttonRegister: {
    color: 'black',
    width: '70%',
  },
});
