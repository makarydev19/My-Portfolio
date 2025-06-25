export type WarehouseEntry = {
  name: string;
  location: string;
  amount: string;
};

export type EditableFieldKey =
  | 'partNumber'
  | 'madeIn'
  | 'name'
  | 'category'
  | 'brand'
  | 'oems'
  | 'fitCars';

export interface ItemInfoProps {
  isEdit?: boolean;
  partNumber: string;
  madeIn: string;
  name: string;
  category: string;
  brand: string;
  oems: string[];
  fitCars: string[];
  warehouses: WarehouseEntry[];
  onChange?: (field: EditableFieldKey, value: string | string[]) => void;
  onCreateItem?: () => void;
}
