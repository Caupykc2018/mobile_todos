import React, { useState } from 'react';
import { View } from 'react-native';
import { SearchBar } from './SearchBar';
import { InputBar } from './InputBar';

export const TopMenu = ({ visibleElements }) => {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <View>
      {!isSearch ? (
        <InputBar visibleElements={visibleElements} setIsSearch={setIsSearch} />
      ) : (
        <SearchBar setIsSearch={setIsSearch} />
      )}
    </View>
  );
};
