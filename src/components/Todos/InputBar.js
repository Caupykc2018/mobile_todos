import React, { useState, useCallback, useRef, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, updateTodos } from '../../actions';

export const InputBar = ({ visibleElements, setIsSearch }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const inputRef = useRef();

  const todos = useSelector((state) => state.todos);
  const activeTodos = useMemo(() => todos.filter((todo) => !todo.isCompleted), [
    todos,
  ]);

  const handleOnChangeTextInput = useCallback((text) => {
    setTitle(text);
  }, []);

  const handleOnSubmit = useCallback(() => {
    dispatch(createTodo(title));
    setTitle('');
  }, [title]);

  const handleOnClickToggleAll = useCallback(() => {
    const editingTodos = activeTodos.length ? activeTodos : todos;

    dispatch(
      updateTodos(
        editingTodos.map((todo) => todo.id),
        Boolean(activeTodos.length),
      ),
    );
  }, [activeTodos, todos]);

  const handleOnPressSearch = useCallback(() => {
    setIsSearch(true);
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        mode="outlined"
        placeholder="What needs to be done?"
        ref={inputRef}
        value={title}
        left={
          visibleElements && (
            <TextInput.Icon
              name="chevron-down"
              forceTextInputFocus={false}
              onPress={handleOnClickToggleAll}
              color={activeTodos.length ? 'black' : 'lightgray'}
            />
          )
        }
        right={
          <TextInput.Icon
            name="magnify"
            forceTextInputFocus={false}
            onPress={handleOnPressSearch}
          />
        }
        onChangeText={handleOnChangeTextInput}
        onSubmitEditing={handleOnSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    height: 58,
    width: 10,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
  },
});
