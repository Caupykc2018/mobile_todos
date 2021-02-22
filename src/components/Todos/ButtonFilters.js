import React from 'react';
import { Button } from 'react-native-paper';
import { buttonFiltersStyles } from './utils/styles';

export const ButtonFilters = () => {
  return (
    <Button mode="outlined" style={buttonFiltersStyles.button}>
      Filters
    </Button>
  );
};
