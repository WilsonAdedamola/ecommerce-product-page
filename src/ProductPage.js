import React from 'react'
import { useState } from 'react'
import ThumbImage from './ThumbImage'
import ThumbImage1 from './images/image-product-1-thumbnail.jpg'
import ThumbImage2 from './images/image-product-2-thumbnail.jpg'
import ThumbImage3 from './images/image-product-3-thumbnail.jpg'
import ThumbImage4 from './images/image-product-4-thumbnail.jpg'
import plus from './images/icon-plus.svg'
import minus from './images/icon-minus.svg'
import cart from './images/icon-cart.svg'

import imageproductone from './images/image-product-1.jpg';
import imageproducttwo from './images/image-product-2.jpg';
import imageproductthree from './images/image-product-3.jpg';
import imageproductfour from './images/image-product-4.jpg';

const ProductPage = ({addToCart, addCount, minusCount, count}) => {

  const imageUrl = [
    {
      id: 1,
      image: ThumbImage1,
      displayUrl: imageproductone
    },
    {
      id: 2,
      image: ThumbImage2,
      displayUrl: imageproducttwo
    },
    {
      id: 3,
      image: ThumbImage3,
      displayUrl: imageproductthree
    },
    {
      id: 4,
      image: ThumbImage4,
      displayUrl: imageproductfour
    }
  ]
  
  const [clickState, setClickState] = useState(false)
  const [productImage, setProductImage] = useState(imageproductone)
  

  const displayFirstPicture = (id) =>{
    setProductImage(imageproductone)
    if(imageUrl[0].id === id){
      setClickState(true)
      console.log(clickState, "clicked")
    }
    
  }

  const displaySecondPicture = (id) =>{
    setProductImage(imageproducttwo)
    if(imageUrl[1].id === id){
      setClickState(true)
      console.log(clickState, "clicked")
    }
    
  }

  const displayThirdPicture = () =>{
    setProductImage(imageproductthree)
    setClickState(true)
    console.log(clickState, "clicked")
  }

  const displayFourthPicture = () =>{
    setProductImage(imageproductfour)
    setClickState(true)
    console.log(clickState, "clicked")
  }

  const prices = [
    {
      productPrice: "125.00",
      productDiscount: "50%",
      productPreviousPrice: "250.00"
    }
  ]

  return (
    <main>
      <div className="image-section">
        <div className="product-image__container">
          <img src={productImage} alt="Product image" className="product-image"/>
        </div>
        <div className="thumb-image">
          <ThumbImage image={ThumbImage1} onClick={displayFirstPicture} clickState={clickState} className={clickState ? 'clicked-state' : ''} />
          <ThumbImage image={ThumbImage2} onClick={displaySecondPicture} clickState={clickState}/>
          <ThumbImage image={ThumbImage3} onClick={displayThirdPicture} clickState={clickState}/>
          <ThumbImage image={ThumbImage4} onClick={displayFourthPicture} clickState={clickState}/>
        </div>
      </div>
      <div className="product-details">
        <div className="content-width">
          <h2 className='product-details__company-name'>SNEAKER COMPANY</h2>
          <h1 className="product-details__name">Fall Limited Edition Sneakers</h1>
          <p className="product-details__content">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
          <div className="product-details__prices">
            <h1 className='product-details__price'>${prices[0].productPrice}<span className='product-details__discount'>{prices[0].productDiscount}</span></h1>
            <p className='product-details__previous-price'>${prices[0].productPreviousPrice}</p>
          </div>
          <div className="product-details__button">
            <div className="product-details__button--count">
              <img src={minus} alt="minus" className='minus' onClick={()=>minusCount()}/>
              <p>{count}</p>
              <img src={plus} alt="plus" className='plus' onClick={()=>addCount()}/>
            </div>
            <button className="product-details__button--add" onClick={()=>addToCart()}><img src={cart} alt="cart" /> Add to cart</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductPage
