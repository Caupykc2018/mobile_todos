import React, { useCallback } from 'react';
import { View, Alert } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { FormLogin } from '../components/Login/FormLogin';
import { loginScreenStyles } from './utils/styles';
import {
  GoogleSigninButton,
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';

export const LoginScreen = ({ navigation }) => {
  const handleOnPressSignInGoogle = useCallback(async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo === undefined);
    } catch (e) {
      if (e.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Play services are not available');
      }
      console.log(e.message);
    }
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
