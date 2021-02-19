import React from 'react';
import { Appbar } from 'react-native-paper';

export const TodosHeader = () => {
  return (
    <Appbar.Header>
      <Appbar.Content title="Todos" />
      <Appbar.Action icon="dots-vertical" />
    </Appbar.Header>
  );
};
