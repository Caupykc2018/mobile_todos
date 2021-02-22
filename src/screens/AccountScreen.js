import React, { useCallback } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../actions';
import { accountScreenStyles } from './utils/styles';

export const AccountScreen = () => {
  const { login } = useSelector((state) => state.currentUser);

  const dispatch = useDispatch();

  const handleOnPressLogOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <View style={accountScreenStyles.container}>
      <View style={accountScreenStyles.containerInfo}>
        <Text style={accountScreenStyles.textInfo}>
          <Text>Hi, </Text>
          <Text style={accountScreenStyles.textLogin}>{login}</Text>
        </Text>
      </View>
      <View style={accountScreenStyles.containerButton}>
        <Button
          style={accountScreenStyles.button}
          onPress={handleOnPressLogOut}>
          <Text style={accountScreenStyles.buttonText}>Log out</Text>
        </Button>
      </View>
    </View>
  );
};
