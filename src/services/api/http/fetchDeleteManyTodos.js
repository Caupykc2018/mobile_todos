import { configuredFetch } from './configuredFetch';
import { FetchError } from './fetchError';

export const fetchDeleteManyTodos = async ({ todoIds }) => {
  const response = await configuredFetch('/api/todos/', 'DELETE', null, {
    todoIds,
  });

  const data = await response.json();

  if (response.ok) {
    return data;
  }
  throw new FetchError({ ...data, status: response.status });
};
