import { useState } from 'react';
import './App.css';
import Cartcontent from './Cartcontent';
import Navbar from './Navbar';
import ProductPage from './ProductPage';

function App() {

  const [showCart, setShowCart] = useState(false)
  const [cartContent, setCartContent] = useState(false)
  const [count, setCount] = useState(0)

  const handleCartToggle = () =>{
    setShowCart(!showCart)
  }

  const addToCart = () =>{
    if(count === 0) return
    setCartContent(true)
  }

  const removeFromCart = () =>{
    setCartContent(false)
    console.log(cartContent)
  }

  const addCount = () =>{
    setCount(count + 1)
  }

  const minusCount = () =>{
    if(count === 0) return
    setCount(count - 1)
  }

  
  return (
    <div className='App'>
      <Navbar cartContent={cartContent} count={count} handleCartToggle={handleCartToggle}/>
      <ProductPage addToCart={addToCart} addCount={addCount} minusCount={minusCount} count={count} />
      {showCart && <section className="cart-content">
        <p className='cart-content__title'>Cart</p>
        <div className='cart-content__main'>
          { cartContent ? <Cartcontent count={count} removeFromCart={removeFromCart}/> : <p className='empty'>Your cart is empty</p>}
        </div>
      </section>}
      <div class="attribution">
            <p>Coded by <span class="pname"><a href="https://www.twitter.com/wildam_wildam" target="_blank">WilsonAdedamola</a></span></p>
        </div>
    </div>
  );
}

export default App;
