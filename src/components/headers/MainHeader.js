import React from 'react';
import { Appbar } from 'react-native-paper';

export const MainHeader = ({ title }) => {
  return (
    <Appbar>
      <Appbar.Content title={title} />
    </Appbar>
  );
};
