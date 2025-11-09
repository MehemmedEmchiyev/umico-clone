import React from 'react';
import { useBasketApi } from './useBasketApi';

const BasketApiComponent: React.FC = () => {
  const { data, loading, error } = useBasketApi();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>No data available.</p>;
  }

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {data.map((category) => (
          <li key={category.id}>
            <strong>{category.name}</strong>
            <p>Slug: {category.slugged_name}</p>
            <p>Child IDs: {category.child_ids.join(', ')}</p>
            <p>Menu Icon: {category.icons.menu_icon}</p>
            <p>Original Icon: {category.icons.original}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BasketApiComponent;