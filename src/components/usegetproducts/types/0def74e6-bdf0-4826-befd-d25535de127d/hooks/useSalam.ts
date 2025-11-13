import { useState } from 'react';

export const useSalamLar = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return {
    data,
    loading,
    error,
  };
};