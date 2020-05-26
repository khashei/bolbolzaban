/* eslint-disable import/no-unresolved */
import { getRequest } from '@utils/request';
import BASE_PATH from '@app-settings';

const generateTextRequest = async ({ style, input, topk, temper }) =>
  getRequest({
    url: `${BASE_PATH}/deeptext/${style}/${input}/${topk}/${temper}`,
  });

export default generateTextRequest;
