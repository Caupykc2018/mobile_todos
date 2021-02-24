import React, { useEffect, useContext, useCallback } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { Todo } from '../components/Todos/Todo';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos, refreshToken, clearAllTodos } from '../actions';
import { TopMenu } from '../components/Todos/TopMenu';
import { useDebounce } from '../hooks/useDebounce';
import { FormOption } from '../components/Todos/FormOption';
import { todosScreenStyles } from './utils/styles';
import { ViewTodosContext } from '../context/viewTodos/viewTodosContext';

export const TodosScreen = () => {
  const { viewTodos } = useContext(ViewTodosContext);

  const dispatch = useDispatch();

  const filters = useSelector((state) => state.filters);
  const sorts = useSelector((state) => state.sorts);
  const isAllTodos = useSelector((state) => state.isAllTodos);
  const loadingTodos = useSelector((state) => state.loadingTodos);

  useEffect(() => {
    dispatch(refreshToken());
  }, []);

  useDebounce(
    () => {
      dispatch(clearAllTodos());
      dispatch(getAllTodos());
    },
    250,
    [filters, sorts],
  );

  const handleOnScrollEnd = useCallback(() => {
    if (!isAllTodos && !loadingTodos) {
      dispatch(getAllTodos());
    }
  }, [isAllTodos, loadingTodos]);

  return (
    <View style={todosScreenStyles.container}>
      <View style={todosScreenStyles.app}>
        <FormOption />
        <TopMenu visibleElements={Boolean(viewTodos.length)} />
        <FlatList
          data={viewTodos}
          renderItem={({ item }) => (
            <Todo
              id={item.id}
              title={item.title}
              isCompleted={item.isCompleted}
              createdAt={item.createdAt}
            />
          )}
          keyExtractor={(todo) => String(todo.id)}
          onEndReachedThreshold={0.3}
          onEndReached={handleOnScrollEnd}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() =>
            !isAllTodos && (
              <View style={todosScreenStyles.listFooter}>
                {loadingTodos && (
                  <ActivityIndicator animating size="large" color="green" />
                )}
              </View>
            )
          }
        />
      </View>
    </View>
  );
};
