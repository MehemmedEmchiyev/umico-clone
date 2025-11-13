import { useState } from 'react';

export const useSalam = () => {
  const [createValue, setCreateValue] = useState(false);
  const [salamValue, setSalamValue] = useState('dawdaw');

  const handleCreateChange = (newValue: boolean) => {
    setCreateValue(newValue);
  };

  const handleSalamChange = (newValue: string) => {
    setSalamValue(newValue);
  };

  return {
    createValue,
    salamValue,
    handleCreateChange,
    handleSalamChange,
  };
};