import React, { useState, useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { Appbar, Portal, Dialog, Button, Badge } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodos } from '../../actions';
import { todoHeaderStyles } from './utils/styles';

export const TodosHeader = () => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const completedTodos = useMemo(
    () => todos.filter((todo) => todo.isCompleted),
    [todos],
  );

  const handleOnPressMore = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleOnDismiss = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleOnPressCompleted = useCallback(() => {
    dispatch(
      deleteTodos(
        todos.filter((todo) => todo.isCompleted).map((todo) => todo.id),
      ),
    );
    setShowModal(false);
  }, [todos]);

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Todos" />
        <Appbar.Action icon="dots-vertical" onPress={handleOnPressMore} />
      </Appbar.Header>
      <Portal>
        <Dialog visible={showModal} onDismiss={handleOnDismiss}>
          <Dialog.Title>More actions</Dialog.Title>
          <Dialog.Content>
            <View>
              <Badge style={todoHeaderStyles.badge}>
                {completedTodos.length}
              </Badge>
              <Button
                mode="outlined"
                onPress={handleOnPressCompleted}
                disabled={!completedTodos.length}>
                Clear completed
              </Button>
            </View>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={handleOnDismiss}>Cancel</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
};
