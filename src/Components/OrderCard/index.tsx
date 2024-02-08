import { XMarkIcon } from '@heroicons/react/24/solid'
export const OrderCard = ({id, title, imageUrl, price, handleDelete}: {id: number, title: string, imageUrl: string, price: number, handleDelete: (id: number) => void}) => {
  return (
    <div className='flex justify-between items-center mb-3'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt="" />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>${price}</p>
        <XMarkIcon onClick={() => handleDelete(id)} className='w-6 h-6 cursor-pointer'/>
      </div>
    </div>
  )
}
