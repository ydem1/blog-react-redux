import { useState, Dispatch, SetStateAction } from 'react';

type InputHook = [
  string,
  Dispatch<SetStateAction<string>>,
  string,
  Dispatch<SetStateAction<string>>,
];

export const useInput = (): InputHook => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  return [value, setValue, errorMessage, setErrorMessage];
};
