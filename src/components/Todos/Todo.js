import React, { useCallback, useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
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

export const Todo = ({ id, title, isCompleted, createdAt }) => {
  const [showModal, setShowModal] = useState(false);
  const { edittingTodo, setEdittingTodo, editTitle } = useContext(
    EditTodoContext,
  );

  const dispatch = useDispatch();

  const isCurrentTodoEdit = useMemo(() => edittingTodo?.id === id);
  const colorListItem = useMemo(() => {
    if ((Boolean(edittingTodo) && !isCurrentTodoEdit) || !edittingTodo) {
      return 'white';
    }
    return 'lightgray';
  }, [edittingTodo, isCurrentTodoEdit]);

  const handleOnChangeToggle = useCallback(
    () => dispatch(toggleStatusTodo(id, !isCompleted)),
    [isCompleted],
  );
  const handleOnClickDelete = useCallback(() => {
    dispatch(deleteTodo(id));
    setShowModal(false);
  }, []);

  const handleOnPressEdit = useCallback(() => {
    setEdittingTodo({ id, title });
    setShowModal(false);
  }, []);

  const handleOnDismiss = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <>
      <TouchableOpacity
        onLongPress={() => setShowModal(true)}
        onPress={handleOnChangeToggle}
        disabled={Boolean(edittingTodo)}>
        <List.Item
          style={[
            styles.container,
            {
              backgroundColor: colorListItem,
            },
          ]}
          title={<Text style={dynamicStyle(isCompleted).title}>{title}</Text>}
          description={moment(createdAt).calendar()}
          left={() => (
            <View style={styles.containerCheckbox}>
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
              style={styles.buttonAction}
              onPress={handleOnPressEdit}>
              <Text>Edit</Text>
              <Icon name="pencil" size={20} onPress={() => null} />
            </Button>
            <Button
              color="red"
              mode="outlined"
              style={styles.buttonAction}
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  containerCheckbox: {
    justifyContent: 'center',
  },
  containerButtonDelete: {
    justifyContent: 'center',
  },
  buttonAction: {
    marginTop: 10,
  },
});

const dynamicStyle = (isCompleted) =>
  StyleSheet.create({
    title: {
      textDecorationLine: isCompleted ? 'line-through' : 'none',
      color: isCompleted ? 'gray' : 'black',
    },
  });
