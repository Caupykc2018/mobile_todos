import React, { useState, useCallback, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { createTodo, toggleStatusAllTodos } from '../../actions';

export const InputBar = ({ visibleElements, setIsSearch }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const inputRef = useRef();

  const handleOnChangeTextInput = useCallback((text) => {
    setTitle(text);
  }, []);

  const handleOnSubmit = useCallback(() => {
    dispatch(createTodo(title));
    setTitle('');
  }, [title]);

  const handleOnClickToggleAll = useCallback(() => {
    dispatch(toggleStatusAllTodos());
  }, []);

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
