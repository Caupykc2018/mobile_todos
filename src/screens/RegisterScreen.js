import React from 'react';
import { View } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { FormAddUser } from '../components/Register/FormAddUser';
import { registerScreenStyles } from './utils/styles';

export const RegisterScreen = ({ navigation }) => {
  return (
    <View style={registerScreenStyles.container}>
      <View style={registerScreenStyles.form}>
        <View style={registerScreenStyles.containerTitle}>
          <Title style={registerScreenStyles.title}>Registration</Title>
        </View>
        <FormAddUser />
        <View style={registerScreenStyles.containerButton}>
          <Button
            style={registerScreenStyles.buttonRegister}
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
