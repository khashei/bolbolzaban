/* eslint-disable import/no-unresolved */
import { getRequest } from '@utils/request';
import BASE_PATH from '@app-settings';

const generatePoemRequest = async ({ style, mask }) =>
  getRequest({
    url: `${BASE_PATH}/deepsher/${style}/${mask}`,
  });

export default generatePoemRequest;
