import { ReactNode, createContext, useContext, useState } from 'react'
import { Product } from '../interfaces/products.interface'

interface CartContextInterface {
  count: number
  cart: Product[]
  isProductDetailOpen: boolean
  isCheckoutSideMenuOpen: boolean
  productDetail: Product | null
  setProductDetail: (product: Product) => void
  setCount: (count: number) => void
  openProductDetail: () => void
  closeProductDetail: () => void
  openCheckoutSideMenu: () => void
  closeCheckoutSideMenu: () => void
  setCart: (cart: Product[]) => void
}

const CartContext = createContext<CartContextInterface | null>(null)

export const CartProvider = ({children}: {children: ReactNode}) => {
  const [count, setCount] = useState(0)
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const [productDetail, setProductDetail] = useState<Product | null>(null)
  const [cart, setCart] = useState<Product[]>([])

  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)
  
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
  
  return (
    <CartContext.Provider 
      value={{
        count, setCount, 
        isProductDetailOpen, openProductDetail, closeProductDetail, 
        productDetail, setProductDetail,
        cart, setCart,
        isCheckoutSideMenuOpen, openCheckoutSideMenu, closeCheckoutSideMenu}}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)!