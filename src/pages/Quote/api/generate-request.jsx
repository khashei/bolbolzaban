/* eslint-disable import/no-unresolved */
import { getRequest } from '@utils/request';
import API_BASE_PATH from '@app-settings';

const generateRequest = async (context) => {
  if (context) {
    return getRequest({
      url: `${API_BASE_PATH}/deeptext/randomimage?context=(مصرع) ${context}`,
    });
  }

  return getRequest({
    url: `${API_BASE_PATH}/deeptext/randomimage`,
  });
};

export default generateRequest;
