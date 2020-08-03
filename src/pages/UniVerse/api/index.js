/* eslint-disable import/no-unresolved */
import { getRequest } from '@utils/request';
import API_BASE_PATH from '@app-settings';

const generatePoemRequest = async ({ style, mask }) =>
  getRequest({
    url: `${API_BASE_PATH}/deepsher/${style}/${mask}`,
  });

export default generatePoemRequest;
