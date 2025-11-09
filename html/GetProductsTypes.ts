export interface Category {
  id: number;
  name: string;
  slugged_name: string;
  child_ids: string[];
  icons: {
    menu_icon: string;
    original: string;
  };
}