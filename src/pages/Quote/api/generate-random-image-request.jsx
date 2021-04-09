/* eslint-disable import/no-unresolved */
import { getRequest } from '@utils/request';
import API_BASE_PATH from '@app-settings';

const PREFIXES = [
  ['(مصرع) زمستان', '(مصرع) در زمستان', '', '', ''],
  ['(مصرع) زمستان', '(مصرع) در زمستان', '', '', ''],
  ['(مصرع) نوروز', '(مصرع) عید', '(مصرع) بهار', '(مصرع) مبارک', '', ''],
  ['(مصرع) ماه رمضان', '(مصرع) عید', '(مصرع) بهار', '(مصرع) روزه', '(مصرع) رمضان', '', ''],
  ['(مصرع) بهار', '', '', ''],
  ['(مصرع) به تابستان', '', '', ''],
  ['(مصرع) به تابستان', '', '', ''],
  ['(مصرع) به تابستان', '', '', ''],
  ['(مصرع) پاییز', '(مصرع) به پاییز', '', '', ''],
  ['(مصرع) پاییز', '(مصرع) به پاییز', '', '', ''],
  ['(مصرع) پاییز', '(مصرع) به پاییز', '', '', ''],
  ['(مصرع) زمستان', '(مصرع) در زمستان', '', '', ''],
];

const generateRandomImageRequest = async () => {
  const month = new Date().getMonth();
  const inputs = PREFIXES[month];

  return getRequest({
    url: `${API_BASE_PATH}/deeptext/randomimage?context=${
      inputs[Math.floor(Math.random() * inputs.length)]
    }`,
  });
};

export default generateRandomImageRequest;
