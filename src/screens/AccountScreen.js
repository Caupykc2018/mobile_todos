import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../actions';

export const AccountScreen = () => {
  const { login } = useSelector((state) => state.currentUser);

  const dispatch = useDispatch();

  const handleOnPressLogOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <Text style={styles.textInfo}>
          <Text>Hi, </Text>
          <Text style={styles.textLogin}>{login}</Text>
        </Text>
      </View>
      <View style={styles.containerButton}>
        <Button style={styles.button} onPress={handleOnPressLogOut}>
          <Text style={styles.buttonText}>Log out</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  containerInfo: {
    padding: 20,
    alignItems: 'center',
  },
  textInfo: {
    fontSize: 30,
  },
  textLogin: {
    fontWeight: 'bold',
  },
  containerButton: {
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 20,
  },
  textButton: {
    color: 'white',
  },
});
