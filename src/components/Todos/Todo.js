import React, { useCallback, useState, useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';
import {
  Button,
  Checkbox,
  List,
  Text,
  Dialog,
  Portal,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleStatusTodo } from '../../actions';
import { EditTodoContext } from '../../context/editTodo/editTodoContext';
import { useMemo } from 'react';
import { todoStyles, todoDynamicStyle } from './utils/styles';

export const Todo = ({ id, title, isCompleted, createdAt }) => {
  const [showModal, setShowModal] = useState(false);
  const { editingTodo, setEditingTodo } = useContext(EditTodoContext);

  const dispatch = useDispatch();

  const isCurrentTodoEdit = useMemo(() => editingTodo?.id === id, [
    editingTodo,
  ]);
  const colorListItem = useMemo(() => {
    if ((Boolean(editingTodo) && isCurrentTodoEdit) || !editingTodo) {
      return 'white';
    }
    return 'lightgray';
  }, [editingTodo, isCurrentTodoEdit]);

  const handleOnChangeToggle = useCallback(
    () => dispatch(toggleStatusTodo(id, !isCompleted)),
    [isCompleted],
  );
  const handleOnClickDelete = useCallback(() => {
    dispatch(deleteTodo(id));
    setShowModal(false);
  }, []);

  const handleOnPressEdit = useCallback(() => {
    setEditingTodo({ id, title });
    setShowModal(false);
  }, [id, title]);

  const handleOnDismiss = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <>
      <TouchableOpacity
        onLongPress={() => setShowModal(true)}
        onPress={handleOnChangeToggle}
        disabled={Boolean(editingTodo)}>
        <List.Item
          style={[
            todoStyles.container,
            {
              backgroundColor: colorListItem,
            },
          ]}
          title={
            <Text style={todoDynamicStyle(isCompleted).title}>{title}</Text>
          }
          description={moment(createdAt).calendar()}
          left={() => (
            <View style={todoStyles.containerCheckbox}>
              <Checkbox status={isCompleted ? 'checked' : 'unchecked'} />
            </View>
          )}
        />
      </TouchableOpacity>
      <Portal>
        <Dialog visible={showModal} onDismiss={handleOnDismiss}>
          <Dialog.Title>Actions on selected todo</Dialog.Title>
          <Dialog.Content>
            <Button
              color="green"
              mode="outlined"
              style={todoStyles.buttonAction}
              onPress={handleOnPressEdit}>
              <Text>Edit</Text>
              <Icon name="pencil" size={20} onPress={() => null} />
            </Button>
            <Button
              color="red"
              mode="outlined"
              style={todoStyles.buttonAction}
              onPress={handleOnClickDelete}>
              <Text>Delete</Text>
              <Icon name="delete" size={20} />
            </Button>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={handleOnDismiss}>
              <Text>Cancel</Text>
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
};
