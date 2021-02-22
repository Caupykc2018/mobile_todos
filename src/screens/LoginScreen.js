import React from 'react';
import { View } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { FormLogin } from '../components/Login/FormLogin';
import { loginScreenStyles } from './utils/styles';

export const LoginScreen = ({ navigation }) => {
  return (
    <View style={loginScreenStyles.container}>
      <View style={loginScreenStyles.form}>
        <View style={loginScreenStyles.containerTitle}>
          <Title style={loginScreenStyles.title}>Login</Title>
        </View>
        <FormLogin />
        <View style={loginScreenStyles.containerButton}>
          <Button
            style={loginScreenStyles.buttonRegister}
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
