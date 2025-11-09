import { useState, useCallback } from 'react';
import { NewDatabaseTypes } from './NewDatabaseTypes';

interface UseNewDatabaseProps {
  onSuccess?: (data: NewDatabaseTypes.ResponseBody) => void;
  onError?: (error: Error) => void;
}

export const useNewDatabase = ({ onSuccess, onError }: UseNewDatabaseProps = {}) => {
  const [data, setData] = useState<NewDatabaseTypes.ResponseBody | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('new_database', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          surname: surname,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData: NewDatabaseTypes.ResponseBody = await response.json();
      setData(responseData);
      if (onSuccess) {
        onSuccess(responseData);
      }
    } catch (e: any) {
      setError(e);
      if (onError) {
        onError(e);
      }
    } finally {
      setLoading(false);
    }
  }, [name, surname, onSuccess, onError]);

  return {
    data,
    loading,
    error,
    setName,
    setSurname,
    handleSubmit,
  };
};
