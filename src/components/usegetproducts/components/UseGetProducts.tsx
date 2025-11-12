import React from 'react';
import { useUseGetProducts } from '../hooks/useUseGetProducts';
import { UseGetProductsTypes } from '../types/UseGetProductsTypes';

const UseGetProducts: React.FC<UseGetProductsTypes> = () => {
  const { data, loading, error, fetchData } = useUseGetProducts();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <button onClick={fetchData}>Get Products</button>
      {data && Object.keys(data).length > 0 ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <div>No data available.</div>
      )}
    </div>
  );
};

export default UseGetProducts;
