import Image from 'next/image';

import { SyncProductV2 } from '@/trpc';
import { Button } from '@ui/button';

type Props = {
  product: SyncProductV2;
};
export const ProductV2 = ({ product }: Props) => {
  const { name, thumbnail_url } = product;

  return (
    <article className='border border-gray-200 rounded bg-white flex flex-col relative'>
      <div className='flex items-center justify-center flex-1 sm:flex-shrink-0 w-full p-6'>
        {thumbnail_url && (
          <Image
            src={thumbnail_url}
            className='w-[250px] h-[250px]'
            width={800}
            height={800}
            alt={`${name}`}
            title={`${name}`}
          />
        )}
      </div>
      <div className='flex-1 p-6 pt-0'>
        <div className='text-center'>
          <p className='mb-1 font-semibold text-gray-900'>{name}</p>
        </div>
      </div>
      <div className='p-3 flex flex-col sm:flex-row justify-center items-center'>
        <Button>Add to cart</Button>
      </div>
    </article>
  );
};
