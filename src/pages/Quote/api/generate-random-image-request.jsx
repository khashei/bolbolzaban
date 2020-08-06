/* eslint-disable import/no-unresolved */
import { getRequest } from '@utils/request';
import API_BASE_PATH from '@app-settings';

const generateRandomImageRequest = async () => {
  return getRequest({
    url: `${API_BASE_PATH}/deeptext/randomimage`,
  });
};

export default generateRandomImageRequest;
