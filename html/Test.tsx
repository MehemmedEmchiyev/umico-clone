import React from 'react';
import { useTest } from './useTest';

const Test: React.FC = () => {
  const { catalogItemsHTML, loading, error } = useTest();

  if (loading) {
    return <div>Loading catalog items...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div dangerouslySetInnerHTML={{ __html: catalogItemsHTML }} />
  );
};

export default Test;