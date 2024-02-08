import { useState, useEffect } from 'react'
import { Layout } from '../../Components/Layout'
import { Card } from '../../Components/Card'
import { ProductDetail } from '../../Components/ProductDetail'
import { Product } from '../../interfaces/products.interface'

export const Home = () => {
  const [products, setProducts] = useState<Product[] | null>(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])
  

  return (
    <Layout>
      <div className='grid gap-3 grid-cols-4 w-full max-w-screen-lg'>
        { products?.map(product => {
          return <Card key={product.id} data={product} />
        }) }
      </div>
      <ProductDetail />
    </Layout>
  )
}
