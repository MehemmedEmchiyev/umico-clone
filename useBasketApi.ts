import { useState, useEffect } from 'react';
import { Category } from './types';

interface ApiResponse {
  data: Category[];
}

export const useBasketApi = () => {
  const [data, setData] = useState<Category[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://raw.githubusercontent.com/mirafgan/PerfectJson/main/shortUmicoCatalog.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json: ApiResponse = await response.json();
        setData(json.data);
      } catch (e: any) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};