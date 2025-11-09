import React from 'react';
import { useNewDatabase } from './useNewDatabase';
import { NewDatabaseTypes } from './NewDatabaseTypes';

interface Props {
  onSuccess?: (data: NewDatabaseTypes.ResponseBody) => void;
  onError?: (error: Error) => void;
}

const NewDatabase: React.FC<Props> = ({ onSuccess, onError }) => {
  const { data, loading, error, setName, setSurname, handleSubmit } = useNewDatabase({
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
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

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
