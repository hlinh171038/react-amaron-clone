import React from 'react'

function CheckoutRight() {
  return (
    <div className='checkout__right'>
        <div className='checkout__right__container'>
          <p className=''>Subtotal(0 items) <strong>0 VND</strong></p>
          <small className="subtotal__gift">
            <input type="checkbox"/> this order contains the gift
          </small>
          <button>Proceed to Checkout</button>
        </div>
    </div>
  )
}

export default CheckoutRight
