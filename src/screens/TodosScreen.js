import React, { useEffect, useContext } from 'react';
import { View, ScrollView } from 'react-native';
import { Todo } from '../components/Todos/Todo';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos, refreshToken } from '../actions';
import { TopMenu } from '../components/Todos/TopMenu';
import { useDebounce } from '../hooks/useDebounce';
import { FormOption } from '../components/Todos/FormOption';
import { todosScreenStyles } from './utils/styles';
import { ViewTodosContext } from '../context/viewTodos/viewTodosContext';

export const TodosScreen = () => {
  const { viewTodos } = useContext(ViewTodosContext);

  const dispatch = useDispatch();

  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  useDebounce(
    () => {
      dispatch(getAllTodos());
    },
    250,
    [filters],
  );

  return (
    <View style={todosScreenStyles.container}>
      <View style={todosScreenStyles.app}>
        <FormOption />
        <TopMenu visibleElements={Boolean(viewTodos.length)} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {viewTodos.map((todo) => (
              <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                isCompleted={todo.isCompleted}
                createdAt={todo.createdAt}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
