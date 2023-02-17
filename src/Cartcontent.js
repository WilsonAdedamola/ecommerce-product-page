import React from 'react'
import deleteIcon from './images/icon-delete.svg'
import cartImage from './images/image-product-1-thumbnail.jpg'

const Cartcontent = ({count, removeFromCart}) => {

  const prices = [
    {
      productPrice: "125.00"
    }
  ]
  let totalPrice
  totalPrice = prices[0].productPrice * count

  return (
    <div className='cart-items'>
      <div className="cart-content__details">
          <img src={cartImage} alt="image" className='cartImage' />
          <div className='cart-content__product-details'>
            <p className='cart-content--product-name'>Fall Limited Edition Sneakers</p>
            <p>${prices[0].productPrice} x {count} <span className='total-price'>${totalPrice}.00</span></p>
          </div>
          <img src={deleteIcon} alt="delete" onClick={()=>removeFromCart()}/>
      </div>
      <button className='checkout-btn'>Checkout</button> 
    </div>
  )
}

export default Cartcontent
