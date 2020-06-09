/* eslint-disable import/no-unresolved */
import { getRequest } from '@utils/request';
import BASE_PATH from '@app-settings';

const generateTextRequest = async ({ style, input, topk, temper }) => {
  const scapedInput = input.replace(/\n/g, '[EOS]');
  return getRequest({
    url: `${BASE_PATH}/deeptext/${style}/${scapedInput}/${topk}/${temper}`,
  });
};

export default generateTextRequest;
