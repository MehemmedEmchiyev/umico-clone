import { useState, useEffect } from 'react';

interface ApiResponse {
  [key: string]: any; // Adjust the type based on your actual API response
}

export const useUseGetProducts = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('usegetproducts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}), // Replace with your actual request body if needed
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData: ApiResponse = await response.json();
      setData(responseData);
    } catch (e: any) {
      setError(e.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    fetchData,
  };
};
