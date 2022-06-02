import { Dispatch, SetStateAction, useCallback, useState } from 'react';

const useBooleanState = (
  defaultValue: boolean | (() => boolean)
): [boolean, () => void, () => void, Dispatch<SetStateAction<boolean>>] => {
  const [value, setValue] = useState(defaultValue);
  return [
    value,
    useCallback(() => setValue(true), []),
    useCallback(() => setValue(false), []),
    setValue,
  ];
};

export default useBooleanState;
