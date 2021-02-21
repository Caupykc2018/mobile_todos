import React, { useState } from 'react';
import { EditTodoContext } from './editTodoContext';

export const EditTodoState = ({ children }) => {
  const [editingTodo, setEditingTodo] = useState(null);

  return (
    <EditTodoContext.Provider value={{ editingTodo, setEditingTodo }}>
      {children}
    </EditTodoContext.Provider>
  );
};
