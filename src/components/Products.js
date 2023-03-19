import React from 'react'
import { useGlobalContext } from '../context'
import Product from './Product';

function Products() {
    const {state} = useGlobalContext()
    const {products} = state
  return (
    <div className='products'>
      <div className='product__row1'>
        {products.map(product =>{
            return <Product key={product.id} {...product}/>
        })}
      </div>
    </div>
  )
}

export default Products
