import { useState, useCallback } from 'react';
import { NewDatabaseInput, NewDatabaseResponse } from './NewDatabaseTypes';

interface UseNewDatabaseProps {
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

export const useNewDatabase = (props: UseNewDatabaseProps) => {
  const { onSuccess, onError } = props;
  const [data, setData] = useState<NewDatabaseResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [input, setInput] = useState<NewDatabaseInput>({
    name: '',
    surname: '',
  });

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('new_database', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
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
  }, [input, onSuccess, onError]);

  return {
    data,
    loading,
    error,
    handleInputChange,
    handleSubmit,
    input,
  };
};