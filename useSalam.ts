import { useState } from 'react';

export const useSalam = () => {
  const [someState, setSomeState] = useState<string>('');

  // Add any custom hook logic here

  return {
    someState,
    setSomeState,
  };
};