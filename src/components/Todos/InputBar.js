import React, { useState, useCallback, useRef, useMemo } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, updateTodos } from '../../actions';
import { inputBarStyles } from './utils/styles';

export const InputBar = ({ setIsSearch }) => {
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
    if (title.trim()) {
      dispatch(createTodo(title));
      setTitle('');
    } else {
      setTitle('');
    }
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
    <View style={inputBarStyles.container}>
      <TextInput
        style={inputBarStyles.input}
        mode="outlined"
        keyboardAppearance="light"
        placeholder="What needs to be done?"
        ref={inputRef}
        value={title}
        left={
          Boolean(todos.length) && (
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
