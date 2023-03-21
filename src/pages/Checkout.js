import React from 'react'
import CheckoutLeft from '../components/CheckoutLeft'
import CheckoutRight from '../components/CheckoutRight'
import Navbar from '../components/Navbar'
function Checkout() {
  return (
    <div className='checkouts'>
      <Navbar/>
      <CheckoutLeft/>
      <CheckoutRight/>
    </div>
  )
}

export default Checkout
