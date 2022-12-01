import React, { useEffect, useRef, useState } from 'react'
import CartIcon from '../../assets/images/icon-cart.svg'
import Avatar from '../../assets/images/image-avatar.png'
import CartItem from '../cart Item/CartItem'
import Logo from '../../assets/images/logo.svg'
import './navbar.css'
const Navbar = ({screenWidth=null, item, setItem}) => {
  const [cartToggler,setCartToggler] = useState(false)

  return (
    
<nav className="navbar navbar-expand-md navbar-light ">
 
  <div className="container-fluid">
    
      <a style={{marginLeft:'40px'}} className="navbar-brand me-auto mt-lg-0" >
        <img src={Logo} alt="Logo" />
      </a>
   
    <div  className="collapse navbar-collapse" >
      <ul className="navbar-nav mx-4 mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" >Collections</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Men</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Women</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Contact</a>
        </li>
      </ul>
    </div>

    <div className="d-flex align-items-center">

      <div className="dropdown">
        <a
          className="text-reset me-3 dropdown-toggle hidden-arrow"
          id="navbarDropdownMenuLink"
          role="button"
          onClick={()=> setCartToggler(!cartToggler)}
        >
          {item>0 && <span className='cart-item'>{item}</span>}
          <img src={CartIcon} height='25' alt="cart icon" />
        </a>
        <div
          style={{display:cartToggler? 'block':'none',
          width:screenWidth && screenWidth<500 && screenWidth-(screenWidth/100)*10,
          left :screenWidth>530? -276 : screenWidth>400? -250-screenWidth/100*10:screenWidth<376?-250:screenWidth>500?180:-265,
        }}
          className="dropdown-menu"
        >
          <h2 className='cart-heading'>Cart</h2>
          <div className='mt-3 line'></div>
          <div style={{
            paddingTop:!item && 40,
            paddingBottom:!item && 40,
          }} className='cart-items-div'>
            {
              item>0?<CartItem item={item} setItem={setItem} />:
              <h2 className='mt-0 p-0 cart-heading'>Your cart is empty</h2>
            }
            {
              item>0 && <div className='cart-btn-div'>
                <button style={{marginTop:0}} className="btn btn-warning w-100">Checkout</button>
              </div>
            }
          </div>
        </div>
      </div>


      <div className="dropdown">
        <a
          className="dropdown-toggle d-flex align-items-center hidden-arrow"
          
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src={Avatar}
            className="rounded-circle"
            height="50"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar