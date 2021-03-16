/* eslint-disable import/no-unresolved */
import { getRequest } from '@utils/request';
import API_BASE_PATH from '@app-settings';

const generateRandomImageRequest = async () => {
  const inputs = ['(مصرع) نوروز', '(مصرع) عید', '(مصرع) بهار', '(مصرع) مبارک', ''];

  return getRequest({
    url: `${API_BASE_PATH}/deeptext/randomimage?context=${
      inputs[Math.floor(Math.random() * inputs.length)]
    }`,
  });
};

export default generateRandomImageRequest;
