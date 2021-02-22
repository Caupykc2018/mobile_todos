import { configuredFetch } from './configuredFetch';
import { FetchError } from './fetchError';

export const fetchLogin = async ({ login, password }) => {
  const response = await configuredFetch('/api/login', 'POST', null, {
    login,
    password,
  });

  const data = await response.json();

  if (response.ok) {
    return data;
  }
  throw new FetchError({ ...data, status: response.status });
};
