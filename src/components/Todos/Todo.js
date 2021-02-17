import React, { useCallback, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Checkbox, List, Text, Dialog } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleStatusTodo } from '../../actions';

export const Todo = ({ id, title, isCompleted, createdAt }) => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const handleOnChangeToggle = useCallback(
    () => dispatch(toggleStatusTodo(id, !isCompleted)),
    [dispatch, id, isCompleted],
  );
  const handleOnClickDelete = useCallback(() => dispatch(deleteTodo(id)), [
    dispatch,
    id,
  ]);

  return (
    <>
      <TouchableOpacity onLongPress={() => setShowModal(true)}>
        <List.Item
          style={styles.container}
          title={<Text style={dynamicStyle(isCompleted).title}>{title}</Text>}
          description={moment(createdAt).calendar()}
          left={() => (
            <View style={styles.containerCheckbox}>
              <Checkbox
                status={isCompleted ? 'checked' : 'unchecked'}
                onPress={handleOnChangeToggle}
              />
            </View>
          )}
          right={() => (
            <View style={styles.containerButtonDelete}>
              <Button onPress={handleOnClickDelete}>
                <Icon name="delete" size={30} color="red" />
              </Button>
            </View>
          )}
        />
      </TouchableOpacity>
      <Dialog visible={showModal}>
        <Dialog.Content>
          <Text>Ok</Text>
        </Dialog.Content>
      </Dialog>
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
});

const dynamicStyle = (isCompleted) =>
  StyleSheet.create({
    title: {
      textDecorationLine: isCompleted ? 'line-through' : 'none',
      color: isCompleted ? 'gray' : 'black',
    },
  });
