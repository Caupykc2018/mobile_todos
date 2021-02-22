import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { loadingScreenStyles } from './utils/styles';

export const LoadingScreen = () => {
  return (
    <View style={loadingScreenStyles.container}>
      <ActivityIndicator animating />
    </View>
  );
};
