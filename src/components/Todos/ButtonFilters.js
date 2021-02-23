import React, { useState, useCallback } from 'react';
import { Button, Dialog, Portal, Text } from 'react-native-paper';
import { buttonFiltersStyles } from './utils/styles';
import { DatePicker } from './DatePicker';

export const ButtonFilters = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOnPressOpenModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleOnDismiss = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <>
      <Button
        mode="outlined"
        style={buttonFiltersStyles.button}
        onPress={handleOnPressOpenModal}>
        Filters
      </Button>
      <Portal>
        <Dialog visible={showModal} onDismiss={handleOnDismiss}>
          <Dialog.Title>Choose sort</Dialog.Title>
          <Dialog.Content>
            <DatePicker value={new Date()} />
          </Dialog.Content>
        </Dialog>
      </Portal>
    </>
  );
};
