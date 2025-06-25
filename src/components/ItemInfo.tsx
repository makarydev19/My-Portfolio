'use client';

import React from 'react';
import { Input } from './ui/Input';
import type { ItemInfoProps } from '../types/item';

type EditableFieldKey =
  | 'partNumber'
  | 'madeIn'
  | 'name'
  | 'category'
  | 'brand'
  | 'oems'
  | 'fitCars';

export default function ItemInfo({
  isEdit = false,
  partNumber,
  madeIn,
  name,
  category,
  brand,
  oems,
  fitCars,
  warehouses,
  onChange,
  onCreateItem,
}: ItemInfoProps) {
  const editableFields: {
    label: string;
    value: string | string[];
    key: EditableFieldKey;
  }[] = [
    { label: 'Name', value: name, key: 'name' },
    { label: 'Part Number', value: partNumber, key: 'partNumber' },
    { label: 'Category', value: category, key: 'category' },
    { label: 'Made in', value: madeIn, key: 'madeIn' },
    { label: 'Brand', value: brand, key: 'brand' },
    { label: 'OEMs', value: oems, key: 'oems' },
    { label: 'Fit Cars', value: fitCars, key: 'fitCars' },
  ];

  return (
    <div className='flex h-[80vh] flex-col items-end px-40 py-20 font-sans text-black md:flex-row'>
      {/* Left Section */}
      <div className='flex-3/5'>
        <div className='flex flex-wrap gap-x-20 gap-y-10'>
          <div className='w-[15rem]'>
            <h2 className='mb-4 text-4xl font-bold'>
              {isEdit ? 'Add Item' : 'Item Info'}
            </h2>
          </div>
          {editableFields.map(({ label, value, key }) => (
            <div key={key} className='w-full min-w-[9rem] md:w-[15rem]'>
              <p className='mb-1 text-xl font-bold text-[#5E6366]'>{label}</p>

              {isEdit ? (
                Array.isArray(value) ? (
                  <div className='space-y-1'>
                    {value.map((item, idx) => (
                      <Input
                        key={idx}
                        className='w-full bg-gray-100 p-1 text-sm'
                        value={item}
                        onChange={e => {
                          const updated = [...value];
                          updated[idx] = e.target.value;
                          onChange?.(key, updated);
                        }}
                      />
                    ))}
                    <button
                      onClick={() => onChange?.(key, [...value, ''])}
                      className='mt-1 text-xs text-blue-500'
                    >
                      + Add {label}
                    </button>
                  </div>
                ) : (
                  <Input
                    className='w-full rounded-lg bg-[#EEEFF2] p-2'
                    value={value}
                    onChange={e => onChange?.(key, e.target.value)}
                  />
                )
              ) : Array.isArray(value) ? (
                <div className='mt-2 ml-1 flex flex-wrap gap-2'>
                  {value.map((val, idx) => (
                    <span
                      key={idx}
                      className='rounded-full bg-[#EEEFF2] px-2 py-1 text-sm'
                    >
                      {val}
                    </span>
                  ))}
                </div>
              ) : (
                <p className='mt-2 ml-1 text-lg font-semibold'>{value}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className='relative h-full flex-2/5'>
        <div className='relative z-10 -mb-[0.3rem] flex pl-2'>
          <button className='-mt-2 rounded-lg border-2 border-b-0 px-3 py-1 font-medium'>
            Warehouse
          </button>
          <button className='rounded-lg border-2 px-3 text-gray-400'>
            Suppliers
          </button>
          <button className='rounded-lg border-2 px-3 text-gray-400'>
            Prices
          </button>
        </div>
        <div className='relative z-20 h-full overflow-hidden rounded-lg border'>
          <table className='w-full text-left text-sm'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='p-2'>Name</th>
                <th className='p-2'>Location</th>
                <th className='p-2'>Amount</th>
              </tr>
            </thead>
            <tbody>
              {warehouses.map((entry, idx) => (
                <tr key={idx} className='border-t'>
                  <td className='p-2'>{entry.name}</td>
                  <td className='p-2'>{entry.location}</td>
                  <td className='p-2'>{entry.amount}</td>
                </tr>
              ))}
            </tbody>
            <tbody>
              {warehouses.map((entry, idx) => (
                <tr key={idx} className='border-t'>
                  <td className='p-2'>{entry.name}</td>
                  <td className='p-2'>{entry.location}</td>
                  <td className='p-2'>{entry.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isEdit && (
          <div className='text-right'>
            <button
              onClick={onCreateItem}
              className='rounded bg-blue-900 px-4 py-2 text-white'
            >
              Create Item
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
