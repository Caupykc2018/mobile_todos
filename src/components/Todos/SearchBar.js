import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText } from '../../actions';

export const SearchBar = ({ setIsSearch }) => {
  const { search } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const handleOnPressClose = useCallback(() => {
    setIsSearch(false);
  }, []);

  const handleOnPressClear = useCallback(() => {
    dispatch(setSearchText(''));
  }, []);

  const handleOnChangeSearchText = useCallback((text) => {
    dispatch(setSearchText(text));
  }, []);

  return (
    <TextInput
      mode="outlined"
      style={styles.input}
      value={search}
      forceTextInputFocus={false}
      left={<TextInput.Icon name="arrow-left" onPress={handleOnPressClose} />}
      right={
        Boolean(search) && (
          <TextInput.Icon
            name="backspace-outline"
            onPress={handleOnPressClear}
          />
        )
      }
      onChangeText={handleOnChangeSearchText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
  },
});
