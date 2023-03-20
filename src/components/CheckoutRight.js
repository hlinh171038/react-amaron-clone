import React from 'react'
import { useGlobalContext } from '../context'

function CheckoutRight() {
  const {state} = useGlobalContext();
  return (
    <div className='checkout__right'>
        <div className='checkout__right__container'>
          <p className=''>Subtotal({state.total} item) <strong>{state.price}VND</strong></p>
          <small className="subtotal__gift">
            <input type="checkbox"/> this order contains the gift
          </small>
          <button>Proceed to Checkout</button>
        </div>
    </div>
  )
}

export default CheckoutRight
