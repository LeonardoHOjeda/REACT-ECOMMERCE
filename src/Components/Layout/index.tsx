import { ReactNode } from 'react'

export const Layout = ({children}: {children: ReactNode}) => {
  return (
    <div className='flex flex-col items-center mt-20'>
      {children}
    </div>
  )
}
