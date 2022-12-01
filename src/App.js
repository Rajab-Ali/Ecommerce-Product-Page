import "./App.css";
import ImageSection from "./components/image section/ImageSection";
import Navbar from "./components/navbar/Navbar";
import { thumbnailImages } from "./assets/dummy data/dummy";
import { ProductImages } from "./assets/dummy data/dummy";
import { useEffect, useState } from "react";
import MinusIcon from './assets/images/icon-minus.svg'
import PlusIcon from './assets/images/icon-plus.svg'

function App() {
  const [toggler, setToggler] = useState(false)
  const [screenWidth, setScreenWidth] = useState(getScreenWidth())
  const [item,setItem] = useState(0)
  const [cartItem, setCartItem] = useState(0)
  const [itemBaged, setItemBaged] = useState(false)
  function getScreenWidth(){
    const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
  }
  useEffect(() => {
    function handleWindowScreen(){
      setScreenWidth(getScreenWidth())
    }
    window.addEventListener('resize', handleWindowScreen)
  
    return () => {
      window.removeEventListener('resize',handleWindowScreen)
    }
  }, [])
  
  function addtoCart(){
    setCartItem(item)
  }
  useEffect(()=>{
    setItem(0)
  },[itemBaged])
  return (
    <>
    <button
      style={{display:toggler?'none':''}}
      class="toggle-on navbar-toggler"
      type="button"
      onClick={()=> {
        setToggler(true)
      }}
    >
      <i class="fas fa-bars"></i>
    </button>

    <div  class={toggler?"slide-menu":'hide-menu'} id="navbarSupportedContent">   

    <button
      class="toggle-off navbar-toggler"
      type="button"
      onClick={()=> setToggler(false)}
    >
      <i class="fa-regular fa-circle-xmark"></i>
    </button>
    
      <ul class="navbar-nav  mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" >Collections</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Men</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Women</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Contact</a>
        </li>
      </ul>
    </div>

    <div style={{pointerEvents:toggler && 'none'}}  className="mx-auto col-lg-10 col-md-11 col-sm-12 app">

      <Navbar screenWidth={screenWidth.innerWidth>500?null:screenWidth.innerWidth} item={cartItem} setItem={setCartItem} />
      <div className="line"></div>
      <div class="product-main-div mx-auto col-md-10 col-sm-12">
        <ImageSection screenWidth={screenWidth} thumbnails={thumbnailImages} mainImages={ProductImages} />
        <div className="description-div">
          <p className="company" >SNEAKER COMPANY</p>
          <h1 className="product-name">Fall Limited Edition Sneakers</h1>
          <p className="para">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="price">
            <h2 className="product-name">$125.00</h2>
            <p className="sale">50%</p>
          </div>
          <p className="para orignal-price">$250.00</p>
          <div className="btn-div">
          <div class="btn-group shadow-2" role="group">
  <button onClick={()=> {
    if(item>0){
      setItem(prev=>prev-1)
    }
  }} type="button" class="btn btn-link" ><img src={MinusIcon} alt='minus' /></button>
  <button type="button" class="btn btn-link" >{item}</button>
  <button onClick={()=> {
    if(item<5){
      setItem(prev=>prev+1)
    }
  }} type="button" class="btn btn-link" ><img src={PlusIcon} alt='minus' /></button>
</div>
            <button onClick={()=>{
              addtoCart()
              setItemBaged(!itemBaged)
            }
            } className="btn btn-warning"><span style={{marginRight: '18px'}}><i className="fa-solid fa-cart-shopping"></i></span>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
