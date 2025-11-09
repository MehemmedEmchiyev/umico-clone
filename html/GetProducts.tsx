import React from 'react';
import { useGetProducts } from './useGetProducts';
import { Category } from './GetProductsTypes';

const GetProducts: React.FC = () => {
  const { categoryArr, isLoading, error } = useGetProducts();

  if (isLoading) {
    return <div>Loading categories...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categoryArr.map((category: Category) => (
          <li key={category.id}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetProducts;