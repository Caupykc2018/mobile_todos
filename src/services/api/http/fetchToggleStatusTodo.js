import { configuredFetch } from './configuredFetch';
import { FetchError } from './fetchError';

export const fetchToggleStatusTodo = async ({ todoId, isCompleted }) => {
  const response = await configuredFetch(`/api/todos/${todoId}`, 'PUT', null, {
    isCompleted,
  });

  const data = await response.json();

  if (response.ok) {
    return data;
  }
  throw new FetchError({ ...data, status: response.status });
};
