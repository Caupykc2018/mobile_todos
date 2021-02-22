import React from 'react';
import { Button } from 'react-native-paper';
import { buttonSortsStyles } from './utils/styles';

export const ButtonSorts = () => {
  return (
    <Button mode="outlined" style={buttonSortsStyles.button}>
      Sorts
    </Button>
  );
};
