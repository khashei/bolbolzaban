/* eslint-disable import/no-unresolved */
import { postRequest } from '@utils/request';
import { API_BASE_PATH } from '@app-settings';

export const subscribeRequest = ({ contact }) =>
  postRequest({
    url: `${API_BASE_PATH}/subscribe/${contact}`,
  });

export const sendNotificationRequest = ({ type, text }) => {
  const body = JSON.stringify({
    type,
    text: text.trim(),
  });

  postRequest({
    url: `${API_BASE_PATH}/notify`,
    body,
    jsonResponse: false,
  });
};
