import React, { useState } from 'react';
import { EditTodoContext } from './editTodoContext';

export const EditTodoState = ({ children }) => {
  const [edittingTodo, setEdittingTodo] = useState(null);
  const [editTitle, setEditTitle] = useState(edittingTodo?.title || '');

  return (
    <EditTodoContext.Provider
      value={{ edittingTodo, setEdittingTodo, editTitle, setEditTitle }}>
      {children}
    </EditTodoContext.Provider>
  );
};
