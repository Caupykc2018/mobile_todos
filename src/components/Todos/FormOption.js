import React from 'react';
import { View } from 'react-native';
import { ButtonTabs } from './ButtonTabs';
import { ButtonSorts } from './ButtonSorts';
import { ButtonFilters } from './ButtonFilters';
import { formOptionStyles } from './utils/styles';

export const FormOption = () => {
  return (
    <View style={formOptionStyles.container}>
      <ButtonTabs />
      <ButtonSorts />
      <ButtonFilters />
    </View>
  );
};
