import { postRequest, getRequest } from '@utils/request';
import { BASE_PATH } from '@app-settings';

export const subscribeRequest = ({ contact }) =>
  postRequest({
    url: `${BASE_PATH}/subscribe/${contact}`,
  });

export const feedbackRequest = ({ email, body }) =>
  postRequest({
    url: `${BASE_PATH}/feedback`,
    body: {
      email: email,
      body: body,
    },
  });
