import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../Context'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

export const Navbar = () => {
  const activeStyle = 'underline underline-offset-4'

  const cartContext = useCartContext()

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/' className={({isActive}) => isActive ? activeStyle : undefined}>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink to='/' className={({isActive}) => isActive ? activeStyle : undefined}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to='/clothes' className={({isActive}) => isActive ? activeStyle : undefined} >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink to='/electronics' className={({isActive}) => isActive ? activeStyle : undefined} >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink to='/furnitures' className={({isActive}) => isActive ? activeStyle : undefined} >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink to='/toys' className={({isActive}) => isActive ? activeStyle : undefined} >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink to='/others' className={({isActive}) => isActive ? activeStyle : undefined} >
            Others
          </NavLink>
        </li>
      </ul>
      {/* Derecho */}
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
          leonardo@leo.com
        </li>
        <li>
          <NavLink to='/my-account' className={({isActive}) => isActive ? activeStyle : undefined} >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-in' className={({isActive}) => isActive ? activeStyle : undefined} >
            Sign In
          </NavLink>
        </li>
        <li className='flex items-center'>
            <ShoppingBagIcon className='h-6 w-6' />
            <div>{cartContext.count}</div>
        </li>
      </ul>
    </nav>
  )
}
