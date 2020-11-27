/* eslint-disable import/no-unresolved */
import { postRequest } from '@utils/request';
import API_BASE_PATH from '@app-settings';

export const POETRY_STYLE = 'poetry';
export const TEXT_STYLE = 'text';

const generateTextRequest = async ({ style, input, topk, topp, temperature }) => {
  const body = JSON.stringify({
    context: input.trim(),
    style,
    topk,
    topp,
    temperature,
  });

  return postRequest({
    url: `${API_BASE_PATH}/deeptext/`,
    body,
  });
};

export default generateTextRequest;
