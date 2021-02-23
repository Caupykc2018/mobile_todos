import React, { useState, useCallback } from 'react';
import { Button, Dialog, Portal, Text } from 'react-native-paper';
import { buttonSortsStyles } from './utils/styles';

export const ButtonSorts = () => {
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
        style={buttonSortsStyles.button}
        onPress={handleOnPressOpenModal}>
        Sorts
      </Button>
      <Portal>
        <Dialog visible={showModal} onDismiss={handleOnDismiss}>
          <Dialog.Title>Choose sort</Dialog.Title>
          <Dialog.Content>
            <Text>Ok</Text>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </>
  );
};
