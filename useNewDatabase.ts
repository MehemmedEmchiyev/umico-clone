import { useState, useCallback } from 'react';
import { NewDatabaseInput, NewDatabaseResponse } from './types';

const API_ENDPOINT = '/new_database'; // Use relative URL

export const useNewDatabase = () => {
  const [data, setData] = useState<NewDatabaseResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async (input: NewDatabaseInput) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData: NewDatabaseResponse = await response.json();
      setData(responseData);
    } catch (err: any) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data,
    loading,
    error,
    fetchData,
  };
};