import React, { useState, useMemo } from 'react';
import { View } from 'react-native';
import { SearchBar } from './SearchBar';
import { InputBar } from './InputBar';
import { EditBar } from './EditBar';
import { useContext } from 'react';
import { EditTodoContext } from '../../context/editTodo/editTodoContext';

export const TopMenu = () => {
  const [isSearch, setIsSearch] = useState(false);
  const { editingTodo } = useContext(EditTodoContext);

  const currentInputBar = useMemo(() => {
    if (editingTodo) {
      return <EditBar />;
    } else {
      if (isSearch) {
        return <SearchBar setIsSearch={setIsSearch} />;
      } else {
        return <InputBar setIsSearch={setIsSearch} />;
      }
    }
  }, [editingTodo, isSearch]);

  return <View>{currentInputBar}</View>;
};
