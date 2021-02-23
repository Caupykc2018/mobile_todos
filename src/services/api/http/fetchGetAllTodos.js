import { configuredFetch } from './configuredFetch';
import { FetchError } from './fetchError';

export const fetchGetAllTodos = async ({
  startDate,
  endDate,
  search,
  sortCreatedAt,
}) => {
  const filters = [];
  const sorts = [];

  if (sortCreatedAt) {
    sorts.push(`sortCreatedAt=${sortCreatedAt}`);
  }

  if (!search) {
    if (startDate) {
      filters.push(`start=${new Date(startDate).getTime().toString()}`);
    }

    if (endDate) {
      filters.push(`end=${new Date(endDate).getTime().toString()}`);
    }
  } else {
    filters.push(`search=${search}`);
  }

  const stringQueries = `?${[...filters, ...sorts].join('&')}`;

  const response = await configuredFetch(
    `/api/todos${stringQueries === '?' ? '' : stringQueries}`,
    'GET',
    null,
  );

  const data = await response.json();

  if (response.ok) {
    return data;
  }
  throw new FetchError({ ...data, status: response.status });
};
