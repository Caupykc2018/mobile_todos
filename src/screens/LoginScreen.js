import React, { useCallback } from 'react';
import { View } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { FormLogin } from '../components/Login/FormLogin';
import { loginScreenStyles } from './utils/styles';
import { GoogleSigninButton } from '@react-native-community/google-signin';
import { register } from 'react-native-app-auth';

const config = {
  issuer: 'https://accounts.google.com',
  clientId:
    '184682290791-3fs6sg7scbbi34k3of74nkbh9bck3pqn.apps.googleusercontent.com',
  redirectUrl: 'com.mobile_todos:/callback',
  scopes: ['openid', 'profile'],
};

export const LoginScreen = ({ navigation }) => {
  const handleOnPressSignInGoogle = useCallback(async () => {
    const auth = await register(config);
    console.log(auth);
  }, []);

  return (
    <View style={loginScreenStyles.container}>
      <View style={loginScreenStyles.form}>
        <View style={loginScreenStyles.containerTitle}>
          <Title style={loginScreenStyles.title}>Login</Title>
        </View>
        <FormLogin />
        <View style={loginScreenStyles.containerButton}>
          <GoogleSigninButton onPress={handleOnPressSignInGoogle} />
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
