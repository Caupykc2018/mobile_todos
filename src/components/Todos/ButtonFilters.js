import React, { useState, useCallback } from 'react';
import { Button, Dialog, Portal } from 'react-native-paper';
import { buttonFiltersStyles } from './utils/styles';
import { DatePicker } from './DatePicker';
import { useSelector, useDispatch } from 'react-redux';
import {
  setStartDate,
  setEndDate,
  setDisableStartDate,
  setDisableEndDate,
} from '../../actions';

export const ButtonFilters = () => {
  const [showModal, setShowModal] = useState(false);

  const { start, end, disableStart, disableEnd } = useSelector(
    (state) => state.filters,
  );

  const dispatch = useDispatch();

  const handleOnPressOpenModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleOnDismiss = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleOnChangeStartDate = useCallback((date) => {
    dispatch(setStartDate(date));
  }, []);

  const handleOnChangeEndDate = useCallback((date) => {
    dispatch(setEndDate(date));
  }, []);

  const handleOnPressDisableStartDate = useCallback(() => {
    dispatch(setDisableStartDate(!disableStart));
  }, [disableStart]);

  const handleOnPressDisableEndDate = useCallback(() => {
    dispatch(setDisableEndDate(!disableEnd));
  }, [disableEnd]);

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
          <Dialog.Title>Choose filters</Dialog.Title>
          <Dialog.Content>
            <DatePicker
              value={start}
              label={'Pick date start: '}
              disabled={disableStart}
              onChangeDate={handleOnChangeStartDate}
              onPressCheckbox={handleOnPressDisableStartDate}
            />
            <DatePicker
              value={end}
              label={'Pick date end: '}
              disabled={disableEnd}
              onChangeDate={handleOnChangeEndDate}
              onPressCheckbox={handleOnPressDisableEndDate}
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
