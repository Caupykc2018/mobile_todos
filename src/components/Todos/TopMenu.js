import React, { useState, useMemo } from 'react';
import { View } from 'react-native';
import { SearchBar } from './SearchBar';
import { InputBar } from './InputBar';
import { EditBar } from './EditBar';
import { useContext } from 'react';
import { EditTodoContext } from '../../context/editTodo/editTodoContext';

export const TopMenu = ({ visibleElements }) => {
  const [isSearch, setIsSearch] = useState(false);
  const { edittingTodo } = useContext(EditTodoContext);

  const currentInputBar = useMemo(() => {
    if (edittingTodo) {
      return <EditBar />;
    } else {
      if (isSearch) {
        return <SearchBar setIsSearch={setIsSearch} />;
      } else {
        return (
          <InputBar
            visibleElements={visibleElements}
            setIsSearch={setIsSearch}
          />
        );
      }
    }
  }, [edittingTodo, isSearch, visibleElements]);

  return <View>{currentInputBar}</View>;
};
