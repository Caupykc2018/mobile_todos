import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { FormAddUser } from '../components/Register/FormAddUser';

export const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.containerTitle}>
          <Title style={styles.title}>Registration</Title>
        </View>
        <FormAddUser />
        <View style={styles.containerButton}>
          <Button
            style={styles.buttonRegister}
            mode="flat"
            color="black"
            onPress={() => navigation.navigate('login')}>
            Login
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
  containerButton: {
    alignItems: 'center',
  },
  buttonSubmit: {
    width: '50%',
  },
  buttonRegister: {
    marginTop: 10,
    color: 'black',
    width: '70%',
  },
});
