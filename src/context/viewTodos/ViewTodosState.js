import React from 'react';
import { ViewTodosContext } from './viewTodosContext';
import { ACTIVE, ALL, COMPLETED } from '../../constants';
import { useSelector } from 'react-redux';

export const ViewTodosState = ({ children }) => {
  const viewTodos = useSelector((state) => {
    switch (state.currentTab[state.currentUser?.login]) {
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

  return (
    <ViewTodosContext.Provider value={{ viewTodos }}>
      {children}
    </ViewTodosContext.Provider>
  );
};
