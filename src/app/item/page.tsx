import ItemInfo from '@/src/components/ItemInfo';

export default function ItemViewPage() {
  return (
    <section className='h-screen bg-white'>
      <ItemInfo
        partNumber='12177771'
        madeIn='Egypt'
        name='Name'
        category='Name'
        brand='Name'
        oems={[
          '2376255',
          '2376255',
          '2376255',
          '2376255',
          '2376255',
          '2376255',
        ]}
        fitCars={[
          '2376255',
          '2376255',
          '2376255',
          '2376255',
          '2376255',
          '2376255',
        ]}
        warehouses={[
          { name: 'Name', location: 'Location', amount: 'Amount' },
          { name: 'Name', location: 'Location', amount: 'Amount' },
        ]}
      />
    </section>
  );
}
