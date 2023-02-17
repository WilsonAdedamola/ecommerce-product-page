import React, { useState } from 'react'
import logo from './images/logo.svg'
import avatar from './images/image-avatar.png'
import cart from './images/icon-cart.svg'
import menu from './images/icon-menu.svg'
import close from './images/icon-close.svg'

const Navbar = ({cartContent, count, handleCartToggle }) => {

  const [menuToggle, setMenuToggle] = useState(false)
  
  const handleToggle = () =>{
    setMenuToggle(!menuToggle)
  }

  return (
    <nav className='navbar'>
      <div className='navbar__left-side'>
        <img src={menu} alt="menu" onClick={handleToggle} className='menu'/>
        <div className="navbar-logo">
          <img src={logo} alt="sneakers" className='logo'/>
        </div>
        <div className="navbar-links" style={ menuToggle ? {display: 'block'} : null}>
        { menuToggle && <img src={close} alt="menu" onClick={handleToggle} className='close'/>}
          <ul className='navbar__links'>
            <li className='navbar__links--list'>Collections</li>
            <li className='navbar__links--list'>Men</li>
            <li className='navbar__links--list'>Women</li>
            <li className='navbar__links--list'>About</li>
            <li className='navbar__links--list'>Contact</li>
          </ul>
        </div>
      </div>
      <div className="navbar__right-side">
        <div className='navbar__icon'>
          <img src={cart} alt="cart" className='cart' onClick={()=>handleCartToggle()} />
          {cartContent && <div className="cart-count">{count}</div>}
        </div>
        <div className="navbar__avatar">
          <img src={avatar} alt="avatar" className='avatar'/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
