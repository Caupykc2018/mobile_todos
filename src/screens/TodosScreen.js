import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Todo } from '../components/Todos/Todo';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos, refreshToken } from '../actions';
import { ACTIVE, ALL, COMPLETED } from '../constants';

export const TodosScreen = () => {
  const dispatch = useDispatch();

  const login = useSelector((state) => state.currentUser.login);
  const currentTab = useSelector((state) => state.currentTab[login]);

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

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.app}>
          <View>
            <TextInput
              style={styles.input}
              mode="outlined"
              placeholder="What needs to be done?"
            />
          </View>
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
        </View>
      </View>
    </ScrollView>
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
  input: {
    backgroundColor: 'white',
  },
});
