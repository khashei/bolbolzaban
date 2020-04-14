import { postRequest, getRequest } from '@utils/request';
import { BASE_PATH } from '@app-settings';

export const subscribeRequest = ({ contact }) =>
  postRequest({
    url: `${BASE_PATH}/subscribe/${contact}`,
  });

export const generatePoemRequest = ({ style, mask }) => {
  getRequest({
    url: `${BASE_PATH}/deepsher/${style}/${mask}`,
  });
};

export const feedbackRequest = ({ email, body }) =>
  postRequest({
    url: `${BASE_PATH}/feedback`,
    body: {
      email: email,
      body: body,
    },
  });
