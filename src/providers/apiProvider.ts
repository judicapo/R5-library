interface FetchApiParams {
  method: | 'POST' | 'GET' | 'PUT' | 'DELETE';
  path: string;
  token?: string;
  data?: object;
}

export const fetchApi = async ({ method, path, data, token }: FetchApiParams) => {
  const body = data && JSON.stringify(data);
  const authorization = token && { authorization: `Bearer ${token}` };
  return await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/${path}`, {
    method,
    body,
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...authorization,
    }),
  });
};
