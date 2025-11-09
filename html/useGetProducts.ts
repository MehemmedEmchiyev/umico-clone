import { useState, useEffect } from 'react';
import { Category } from './GetProductsTypes';

interface ApiResponse {
  data: Category[];
}

export const useGetProducts = () => {
  const [categoryArr, setCategoryArr] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://raw.githubusercontent.com/mirafgan/PerfectJson/main/shortUmicoCatalog.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json: ApiResponse = await response.json();
        setCategoryArr(json.data);
      } catch (e: any) {
        setError(e as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    categoryArr,
    isLoading,
    error,
  };
};