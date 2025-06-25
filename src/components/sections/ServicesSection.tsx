import Heading from '../ui/Heading';
import { services } from '@/src/data/data';
import Reveal from '../ui/Reveal';

const ServicesSection = () => {
  return (
    <section className='rounded-t-4xl bg-white py-20 lg:py-32'>
      <Heading text='Services' textColor='black' strokeColor='black' />

      <section className='relative place-self-center pt-10'>
        {services.map(service => (
          <div
            key={service.id}
            className='max-w-4xl rounded-2xl border-b border-black/20 py-10'
          >
            <div className='flex flex-col px-4 lg:flex-row lg:items-center lg:gap-10 lg:px-0'>
              <Reveal duration={1.5}>
                <h1 className='text-8xl text-black'>0{service.id}</h1>
              </Reveal>
              <div className='space-y-2'>
                <Reveal duration={1.5}>
                  <h2 className='text-4xl font-bold text-black'>
                    {service.title}
                  </h2>
                </Reveal>
                <Reveal duration={1.5}>
                  <p className='text-lg text-black/60'>{service.description}</p>
                </Reveal>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default ServicesSection;
