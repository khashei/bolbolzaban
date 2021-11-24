/* eslint-disable import/no-unresolved */
const PREFIXES = [
  ['زمستان', 'در زمستان', '', '', ''],
  ['زمستان', 'در زمستان', '', '', ''],
  ['نوروز', 'عید', 'بهار', 'مبارک', '', ''],
  ['ماه رمضان', 'عید', 'بهار', 'روزه', 'رمضان', '', ''],
  ['بهار', '', '', ''],
  ['به تابستان', '', '', ''],
  ['به تابستان', '', '', ''],
  ['به تابستان', '', '', ''],
  ['پاییز', 'به پاییز', '', '', ''],
  ['پاییز', 'به پاییز', '', '', ''],
  ['پاییز', 'به پاییز', '', '', ''],
  ['زمستان', 'در زمستان', '', '', ''],
];

const generateRandomContext = () => {
  const month = new Date().getMonth();
  const inputs = PREFIXES[month];

  return inputs[Math.floor(Math.random() * inputs.length)];
};

export default generateRandomContext;
