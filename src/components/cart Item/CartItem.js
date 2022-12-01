import React, { useState } from 'react'
import './styles.css'
import { thumbnailImages } from '../../assets/dummy data/dummy'
import DeleteIcon from '../../assets/images/icon-delete.svg'
const CartItem = ({item,setItem}) => {
    const [img, setImg] =  useState(thumbnailImages[0].source)
  return (
    <div className='cart-outer-div'>
        <div className='product-Cart-info'>
            <img src={img} alt='Product Image' className='cart-img' />
            <div className='cart-des'>
                <p style={{marginBottom:'5px'}}>Fall Limited Edition Sneakers</p>
                <p>$125.00 x {item} <span style={{marginLeft:'2px',fontWeight:'bold',color:"black"}}> ${125*item}</span></p>
            </div>
        </div>
            <img onClick={()=>setItem(0)} src={DeleteIcon} alt='delete' className="delete-btn" />
    </div>
  )
}

export default CartItem