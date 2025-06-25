'use client';

import ItemInfo from '@/src/components/ItemInfo';
import { useState } from 'react';

export default function ItemEditPage() {
  const [item, setItem] = useState({
    partNumber: '12177771',
    madeIn: 'Egypt',
    name: 'Name',
    category: 'Name',
    brand: 'Name',
    oems: ['2376255', '2376255'],
    fitCars: ['2376255', '2376255'],
    warehouses: [{ name: 'Name', location: 'Location', amount: 'Amount' }],
  });

  type EditableFieldKey =
    | 'partNumber'
    | 'madeIn'
    | 'name'
    | 'category'
    | 'brand'
    | 'oems'
    | 'fitCars';

  const handleChange = (key: EditableFieldKey, value: string | string[]) => {
    setItem(prev => ({ ...prev, [key]: value }));
  };

  return (
    <section className='h-screen bg-white'>
      <ItemInfo
        isEdit
        {...item}
        onChange={handleChange}
        onCreateItem={() => console.log('Create clicked', item)}
      />
    </section>
  );
}
