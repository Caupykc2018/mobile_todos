import { configuredFetch } from './configuredFetch';
import { FetchError } from './fetchError';

export const fetchGetAllTodos = async ({startDate, endDate}) => {
  const filters = [];

  if(startDate) {
    filters.push(`start=${new Date(startDate).getTime().toString()}`);
  }

  if(endDate) {
    filters.push(`end=${new Date(endDate).getTime().toString()}`);
  }

  const stringQueries = `?${filters.join('&')}`;

  const response = await configuredFetch(`/api/todos${stringQueries}`, 'GET', {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  });

  const data = await response.json();

  if (response.ok) {
    return data;
  }
  throw new FetchError({ ...data, status: response.status });
};
