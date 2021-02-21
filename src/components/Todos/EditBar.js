import React, { useCallback, useState, useContext, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { TextInput, Portal, Dialog, Button } from 'react-native-paper';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { EditTodoContext } from '../../context/editTodo/editTodoContext';
import { useDispatch } from 'react-redux';
import { editTitleTodo } from '../../actions';

const schemaValidation = Yup.object().shape({
  title: Yup.string()
    .trim()
    .min(1, 'Title cannot be less than 1 letter')
    .required('Title cannot be less than 1 letter'),
});

export const EditBar = () => {
  const [showModal, setShowModal] = useState(false);
  const { editingTodo, setEditingTodo } = useContext(EditTodoContext);

  const dispatch = useDispatch();

  const { values, errors, handleChange } = useFormik({
    initialValues: {
      title: '',
    },
    validationSchema: schemaValidation,
  });

  useEffect(() => {
    if (editingTodo) {
      handleChange('title')(editingTodo.title);
    }
  }, [editingTodo]);

  const handleOnClickDeleteChanges = useCallback(() => {
    setShowModal(true);
  });

  const handleOnDismiss = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleOnPressConfirmDelete = useCallback(() => {
    setEditingTodo(null);
    setShowModal(false);
  }, []);

  const handleOnPressEdit = useCallback(() => {
    dispatch(editTitleTodo(editingTodo.id, values.title));
    setEditingTodo(null);
  }, [values.title]);

  return (
    <>
      <TextInput
        mode="outlined"
        style={styles.input}
        value={values.title}
        error={Boolean(errors.title)}
        label={errors.title}
        onChangeText={handleChange('title')}
        left={
          <TextInput.Icon
            name="pencil"
            color={values.title ? 'green' : 'lightgray'}
            onPress={handleOnPressEdit}
          />
        }
        right={
          <TextInput.Icon
            name="backspace-outline"
            color="red"
            onPress={handleOnClickDeleteChanges}
          />
        }
      />
      <Portal>
        <Dialog visible={showModal} onDismiss={handleOnDismiss}>
          <Dialog.Title>Do you want delete changes?</Dialog.Title>
          <Dialog.Content>
            <Text>If you confirm exit edit form changes will not save</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={handleOnDismiss}>Cancel</Button>
            <Button color="red" onPress={handleOnPressConfirmDelete}>
              Exit
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
  },
});
