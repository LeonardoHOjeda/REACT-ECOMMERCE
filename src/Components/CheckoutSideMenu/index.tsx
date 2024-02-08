import { XMarkIcon } from '@heroicons/react/24/solid'
import { useCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../utils'

export const CheckoutSideMenu = () => {
  const cartContext = useCartContext()

  const handleDelete = (id: number) => {
    const filteredProducts = cartContext.cart.filter(product => product.id !== id)
    cartContext.setCart(filteredProducts)
  }
  
  return (
    <aside 
      className={`${cartContext.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} w-[360px] flex-col fixed right-0 border border-black rounded-lg bg-white h-[calc(100vh-80px)] top-[68px]`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <button onClick={() => cartContext.closeCheckoutSideMenu()}>
          <XMarkIcon className="h-6 w-6 text-black" />
        </button>
      </div>
      <div className='px-6 overflow-y-scroll'>
        {
          cartContext.cart.map(product => 
            (
              <OrderCard 
                key={product.id} 
                id={product.id} 
                title={product.title} 
                price={product.price} 
                imageUrl={product.images[0]} 
                handleDelete={handleDelete} 
              />
            )
          )
        }
      </div>
      <div>
        <div className='flex justify-between p-6'>
          <p className='text-lg font-medium'>Total</p>
          <p className='text-lg font-medium'>${totalPrice(cartContext.cart)}</p>
        </div>
        <button 
          className='w-full bg-black text-white text-lg font-medium py-2'
          onClick={() => cartContext.closeCheckoutSideMenu()}>
          Checkout
        </button>
      </div>
    </aside>
  )
}
