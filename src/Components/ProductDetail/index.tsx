import { XMarkIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { useCartContext } from '../../Context'
import { useState } from 'react'

export const ProductDetail = () => {
  const cartContext = useCartContext()
  const [image, setImage] = useState(0)
  
  return (
    <aside 
    className={`${cartContext.isProductDetailOpen ? 'flex' : 'hidden'} w-[360px] flex-col fixed right-0 border border-black rounded-lg bg-white h-[calc(100vh-80px)] top-[68px]`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <button onClick={() => cartContext.closeProductDetail()}>
          <XMarkIcon className="h-6 w-6 text-black" />
        </button>
      </div>

      <figure className='px-6 relative'>
        <img 
          className='w-full h-full rounded-lg' 
          src={cartContext.productDetail?.images.at(image)}
          alt={cartContext.productDetail?.title} />
          {cartContext.productDetail?.images.length !== (image + 1) && (
            <ChevronRightIcon className='absolute w-8 h-8 text-white cursor-pointer right-5 top-28' onClick={() => setImage(image + 1)} />
          )}
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl'>${cartContext.productDetail?.price}</span>
        <span className='font-medium text-xl'>{cartContext.productDetail?.title}</span>
        <span className='font-light text-md'>{cartContext.productDetail?.description}</span>
      </p>
    </aside>
  )
}
