import React, {
  useCallback,
  useState,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import { Text } from 'react-native';
import { TextInput, Portal, Dialog, Button } from 'react-native-paper';
import { useFormik } from 'formik';
import { EditTodoContext } from '../../context/editTodo/editTodoContext';
import { useDispatch } from 'react-redux';
import { editTitleTodo } from '../../actions';
import { editBarStyles } from './utils/styles';
import { editBarValidation } from './utils/formik/validations';
import { editBarInitialValues } from './utils/formik/initialValues';

export const EditBar = () => {
  const [showModal, setShowModal] = useState(false);
  const { editingTodo, setEditingTodo } = useContext(EditTodoContext);

  const dispatch = useDispatch();

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: editBarInitialValues,
    validationSchema: editBarValidation,
    onSubmit: (values, { setSubmitting, setValues }) => {
      if (values.title === editingTodo.title) {
        setEditingTodo(null);
      } else if (!values.title.trim()) {
        return;
      } else {
        dispatch(editTitleTodo(editingTodo.id, values.title));
        setEditingTodo(null);
      }
    },
  });

  const isEdited = useMemo(() => values.title !== editingTodo.title, [
    values,
    editingTodo,
  ]);

  useEffect(() => {
    if (editingTodo?.title) {
      handleChange('title')(editingTodo.title);
    }
  }, [editingTodo]);

  const handleOnClickDeleteChanges = useCallback(() => {
    if (isEdited) {
      setShowModal(true);
    } else {
      setEditingTodo(null);
    }
  }, [isEdited]);

  const handleOnDismiss = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleOnPressConfirmDelete = useCallback(() => {
    setEditingTodo(null);
    setShowModal(false);
  }, []);

  return (
    <>
      <TextInput
        mode="outlined"
        style={editBarStyles.input}
        value={values.title}
        error={Boolean(errors.title)}
        label={errors.title}
        onChangeText={handleChange('title')}
        onSubmitEditing={handleSubmit}
        left={
          isEdited && (
            <TextInput.Icon
              name="pencil"
              color={errors.title ? 'red' : 'green'}
            />
          )
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
