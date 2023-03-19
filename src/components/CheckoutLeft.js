import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { useGlobalContext } from '../context'

function CheckoutLeft() {
    const {state} = useGlobalContext()
  return (
      <div className="checkout__left">
        {state.checkoutArr.map(item=>{
          const {id,image,title,price,rating} = item
          return <div className='checkoutProduct'>
                    <img className='checkoutProduct__image' src={image} />
                    <div className='checkoutProduct__info'>
                        <p className='checkoutProduct__title'>{title}</p>
                        <p className="checkoutProduct__price">
                            <small>$</small>
                            <strong>{price}</strong>
                        </p>
                        <div className="checkoutProduct__rating">
                            {Array(rating)
                            .fill()
                            .map(( i) => (
                                <p><StarIcon style={{color:'yellow'}}/></p>
                            ))}
                        </div>
                            <button>Remove from Basket</button>
                    </div>
                </div>
        })}
      </div>
  )
}

export default CheckoutLeft
