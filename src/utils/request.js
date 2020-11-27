const request = async ({
  url,
  method = 'GET',
  headers = {},
  body = {},
  // token = null,
  contentType = null,
  jsonResponse = true,
}) => {
  const finalHeaders = { ...headers };
  // if (token) {
  //   finalHeaders.Authorization = `${token.token_type} ${token.access_token}`;
  // } else if (store !== null) {
  //   finalHeaders.Authorization = `${userReducer.tokenType} ${userReducer.accessToken}`;
  // }
  if (contentType) {
    finalHeaders['Content-Type'] = contentType;
  }

  const response = await fetch(url, {
    method,
    headers: finalHeaders,
    ...(method === 'POST' && { body }),
  });

  if (jsonResponse) {
    return response.json();
  }

  return response;
};

export const getRequest = async ({
  url,
  headers = {},
  body = {},
  token = null,
  jsonResponse = true,
}) =>
  request({
    url,
    headers,
    body,
    token,
    jsonResponse,
  });

export const postRequest = ({
  url,
  headers = {},
  body = {},
  token = null,
  json = true,
  jsonResponse = true,
}) =>
  request({
    url,
    headers,
    body,
    method: 'POST',
    token,
    contentType: (json && 'application/json') || null,
    jsonResponse,
  });

export const putRequest = ({
  url,
  headers = {},
  body = {},
  token = null,
  json = true,
  jsonResponse = false,
}) =>
  request({
    url,
    headers,
    body,
    method: 'PUT',
    token,
    contentType: (json && 'application/json') || null,
    jsonResponse,
  });

export const deleteRequest = ({
  url,
  headers = {},
  body = {},
  token = null,
  jsonResponse = false,
}) =>
  request({
    url,
    headers,
    body,
    method: 'DELETE',
    token,
    jsonResponse,
  });

export default request;
