import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Todo } from '../components/Todos/Todo';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos, refreshToken } from '../actions';
import { ACTIVE, ALL, COMPLETED } from '../constants';
import { TopMenu } from '../components/Todos/TopMenu';
import { useDebounce } from '../hooks/useDebounce';

export const TodosScreen = () => {
  const dispatch = useDispatch();

  const login = useSelector((state) => state.currentUser.login);
  const currentTab = useSelector((state) => state.currentTab[login]);
  const filters = useSelector((state) => state.filters);

  const viewTodos = useSelector((state) => {
    switch (currentTab) {
      case ALL:
        return state.todos;
      case ACTIVE:
        return state.todos.filter((todo) => !todo.isCompleted);
      case COMPLETED:
        return state.todos.filter((todo) => todo.isCompleted);
      default:
        return state.todos;
    }
  });

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
    <View style={styles.container}>
      <View style={styles.app}>
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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 15,
  },
  app: {
    width: '90%',
  },
});
