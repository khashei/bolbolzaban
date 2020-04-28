import { getRequest } from '@utils/request';
import { BASE_PATH } from '@app-settings';

export const generatePoemRequest = async ({ style, mask }) =>
  await getRequest({
    url: `${BASE_PATH}/deepsher/${style}/${mask}`,
  });
