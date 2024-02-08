import { CheckIcon, PlusIcon } from '@heroicons/react/24/solid'
import { useCartContext } from '../../Context'
import { Product } from '../../interfaces/products.interface'
import { MouseEvent } from 'react'

export const Card = (data: {data: Product}) => {
  const cartContext = useCartContext()

  const showProductDetail = (productDetail: Product) => {
    cartContext.openProductDetail()
    cartContext.setProductDetail(productDetail)
  }

  const addProductsToCart = (event: MouseEvent ,product: Product) => {
    event.stopPropagation()
    cartContext.setCount(cartContext.count + 1)
    cartContext.setCart([...cartContext.cart, product])
    cartContext.openCheckoutSideMenu()
    console.log('Carrito: ', cartContext.cart); 
  }

  const renderIcon = (id: number) => {
    const isProductInCart = cartContext.cart.filter(product => product.id === id ).length > 0
    if (isProductInCart) {
      return (
        <button 
          className='absolute top-0 right-0 flex justify-center items-center bg-green-600 w-6 h-6 rounded-full m-2 p-1'>
          <CheckIcon className='h-6 w-6 text-white'/>
        </button>
      )
    } else {
      return (
        <button 
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1' 
          onClick={(event) => addProductsToCart(event, data.data)}>
          <PlusIcon className='h-6 w-6 text-black'/>
        </button>
      )
    }
  }

  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg' onClick={() => showProductDetail(data.data)}>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {data.data.category.name}
        </span>
        <img className='w-full h-full object-cover rounded-lg' src={data.data.images.at(0)} alt={data.data.title} referrerPolicy="no-referrer" />
        {renderIcon(data.data.id)}
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{data.data.title}</span>
        <span className='text-lg font-medium'>${data.data.price}</span>
      </p>
    </div>
  )
}
