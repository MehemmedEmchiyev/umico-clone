import React, { useState } from 'react';
import { useNewDatabase } from './useNewDatabase';
import { NewDatabaseInput } from './types';

interface Props {
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

const NewDatabase: React.FC<Props> = ({ onSuccess, onError }) => {
  const [input, setInput] = useState<NewDatabaseInput>({
    name: '',
    surname: '',
  });

  const { data, loading, error, fetchData } = useNewDatabase();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetchData(input);
      if (data && onSuccess) {
        onSuccess(data);
      }
    } catch (err: any) {
      if (onError) {
        onError(err);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={input.surname}
            onChange={handleChange}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      {data && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default NewDatabase;