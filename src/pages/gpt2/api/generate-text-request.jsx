/* eslint-disable import/no-unresolved */
import { postRequest } from '@utils/request';
import BASE_PATH from '@app-settings';

export const POETRY_STYLE = 'poetry';
export const TEXT_STYLE = 'text';

const generateTextRequest = async ({ style, input, topk, temperature }) => {
  const body = JSON.stringify({
    context: input.trim(),
    style,
    topk,
    temperature,
  });

  return postRequest({
    url: `${BASE_PATH}/deeptext/`,
    body,
  });
};

export default generateTextRequest;