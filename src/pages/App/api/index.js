/* eslint-disable import/no-unresolved */
import { postRequest } from '@utils/request';
import { API_BASE_PATH } from '@app-settings';

export const subscribeRequest = ({ contact }) =>
  postRequest({
    url: `${API_BASE_PATH}/subscribe/${contact}`,
  });

export const feedbackRequest = ({ email, body }) =>
  postRequest({
    url: `${API_BASE_PATH}/feedback`,
    body: {
      email,
      body,
    },
  });
