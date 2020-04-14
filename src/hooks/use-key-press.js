import { useEffect, useState, useCallback } from 'react';
import { isEqual, includes, isArray } from 'lodash-es';

function useKeyPress(targetKeysArg, observe) {
  const [keyPressed, setKeyPressed] = useState(false);
  const [targetKeys, setTargetKeys] = useState(targetKeysArg);

  useEffect(() => {
    if (!isEqual(targetKeysArg, targetKeys)) {
      setTargetKeys(targetKeysArg);
    }
  }, [targetKeysArg, setTargetKeys, targetKeys]);

  const downHandler = useCallback(
    ({ key }) => {
      if (isArray(targetKeys) ? includes(targetKeys, key) : targetKeys == key) {
        setKeyPressed(true);
      }
    },
    [setKeyPressed, targetKeys]
  );

  const upHandler = useCallback(
    ({ key }) => {
      if (isArray(targetKeys) ? includes(targetKeys, key) : targetKeys == key) {
        setKeyPressed(false);
      }
    },
    [setKeyPressed, targetKeys]
  );

  // Add event listeners
  useEffect(() => {
    if (observe) {
      window.addEventListener('keydown', downHandler);
      window.addEventListener('keyup', upHandler);
    } else {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    }
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [observe, upHandler, downHandler]);

  return keyPressed;
}

export default useKeyPress;
