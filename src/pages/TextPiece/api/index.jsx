/* eslint-disable import/no-unresolved */
import { postRequest } from '@utils/request';
import BASE_PATH from '@app-settings';

const generateTextRequest = async ({ input, topk, temperature }) => {
  const body = JSON.stringify({
    context: input.trim(),
    style: 'text',
    topk,
    temperature,
  });

  return postRequest({
    url: `${BASE_PATH}/deeptext/`,
    body,
  });
};

export default generateTextRequest;
