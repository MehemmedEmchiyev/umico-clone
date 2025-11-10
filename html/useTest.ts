import { useState, useEffect } from 'react';
import { TestApiResponse } from './TestTypes';

export const useTest = () => {
  const [catalogItemsHTML, setCatalogItemsHTML] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://raw.githubusercontent.com/mirafgan/PerfectJson/main/shortUmicoCatalog.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: TestApiResponse = await response.json();

        // Generate HTML from the fetched data
        const html = data.data.map(item => {
          return `<div key=${item.name}>${item.name} <img src=${item.icons.original} alt=${item.name} /></div>`;
        }).join('');

        setCatalogItemsHTML(html);
        setLoading(false);
      } catch (e: any) {
        setError(e);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    catalogItemsHTML,
    loading,
    error,
  };
};