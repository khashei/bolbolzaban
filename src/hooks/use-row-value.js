import { get } from 'lodash-es';
function useRowValue({ value: valueKey }, { value = {}, row = {} }) {
  let rowValue = value;
  if (valueKey === null) {
    rowValue = row;
  } else if (!valueKey) {
    rowValue = value;
  } else {
    rowValue = get(row, valueKey);
  }

  return rowValue;
}

export default useRowValue;
