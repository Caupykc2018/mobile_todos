import { MAX_PAGE_SIZE_TODOS } from '../../../constants';
import { configuredFetch } from './configuredFetch';
import { FetchError } from './fetchError';

export const fetchGetAllTodos = async ({
  startDate,
  endDate,
  search,
  sortCreatedAt,
  countTodos,
}) => {
  const filters = [];
  const sorts = [];
  const pagination = [];

  pagination.push(`take=${MAX_PAGE_SIZE_TODOS}`);
  pagination.push(`skip=${countTodos}`);

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

  const stringQueries = `?${[...filters, ...sorts, ...pagination].join('&')}`;

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
