import React, { useMemo, useCallback } from 'react';
import { Snackbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { clearNotification } from '../actions';
import { ERROR, INFO, WARNING } from '../constants';

export const Notification = ({ children }) => {
  const { message, type } = useSelector((state) => state.notification);

  const dispatch = useDispatch();

  const handleOnClose = useCallback(() => dispatch(clearNotification()), []);

  const color = useMemo(() => {
    switch (type) {
      case ERROR:
        return 'red';
      case INFO:
        return 'lightblue';
      case WARNING:
        return 'yellow';
      default:
        return 'red';
    }
  }, [type]);

  return (
    <>
      {children}
      <Snackbar
        visible={Boolean(message)}
        style={{ backgroundColor: color }}
        onDismiss={handleOnClose}
        action={{
          label: 'hide',
          onPress: handleOnClose,
        }}
        duretion={3000}>
        {message}
      </Snackbar>
    </>
  );
};
