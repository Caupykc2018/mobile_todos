import { configuredSocket } from '../socket/configuredSoket';

let jwtToken;

export const setToken = (token) => {
  jwtToken = token;
};

export const configuredFetch = (
  url = '/',
  method = 'GET',
  headers = {},
  body,
) => {
  const configuredHeaders = jwtToken
    ? { ...headers, Authorization: jwtToken, SocketId: configuredSocket.id }
    : headers;

  return fetch(`http://192.168.56.1:3001${url}`, {
    method,
    headers: configuredHeaders,
    credentials: 'include',
    body: body && JSON.stringify(body),
  });
};

// http://192.168.56.1:3001
// http://10.10.10.161:3001
