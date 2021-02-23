import React, { useState, useCallback } from 'react';
import { Button, Dialog, Portal } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { setCreatedAtSort } from '../../actions';
import { SortMenu } from './SortMenu';
import { buttonSortsStyles } from './utils/styles';

export const ButtonSorts = () => {
  const [showModal, setShowModal] = useState(false);

  const { sortCreatedAt } = useSelector((state) => state.sorts);

  const dispatch = useDispatch();

  const handleOnPressOpenModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleOnDismiss = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleOnChangeMenuCreateAt = useCallback((type) => {
    dispatch(setCreatedAtSort(type));
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
            <SortMenu
              label="Created date"
              value={sortCreatedAt}
              onChange={handleOnChangeMenuCreateAt}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={handleOnDismiss}>OK</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
};
