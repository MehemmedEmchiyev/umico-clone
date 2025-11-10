export interface TestApiResponse {
  data: CatalogItem[];
}

export interface CatalogItem {
  icons: {
    menu_icon: string;
    original: string;
  };
  name: string;
}