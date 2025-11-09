import React from 'react';
import { useNewDatabase } from './useNewDatabase';
import { NewDatabaseInput } from './NewDatabaseTypes';

interface Props {
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

const NewDatabase: React.FC<Props> = ({ onSuccess, onError }) => {
  const { data, loading, error, handleInputChange, handleSubmit, input } = useNewDatabase({
    onSuccess,
    onError,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={input.surname}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" disabled={loading}>Submit</button>
      </form>

      {data && (
        <div>
          <h3>Response Data:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default NewDatabase;