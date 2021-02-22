import { configuredFetch } from './configuredFetch';
import { FetchError } from './fetchError';

export const fetchUpdateManyTodos = async ({ todoIds, isCompleted }) => {
  const response = await configuredFetch('/api/todos', 'PUT', null, {
    isCompleted,
    todoIds,
  });

  const data = await response.json();

  if (response.ok) {
    return data;
  }
  throw new FetchError({ ...data, status: response.status });
};
