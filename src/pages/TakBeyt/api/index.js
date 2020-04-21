import { getRequest } from '@utils/request';
import { BASE_PATH } from '@app-settings';

export const generatePoemRequest = ({ style, mask }) => {
  getRequest({
    url: `${BASE_PATH}/deepsher/${style}/${mask}`,
  });
};
