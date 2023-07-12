import { React, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './components/Banner';
import Items from './components/Items';
import About from './components/About';
import Cart from './components/Cart';
import Cartegory from './components/Cartegory';

import { category, products } from './components/Shop'


function App() {
  const [showItem, setshowItem] = useState(true)
  const [showPrice, setshowPrice] = useState(false)

  let [totalPrice, settotalPrice] = useState(0)

  const showCart = (e) => {
    if (e === "Sneakers") setshowItem(!showItem)
    // if (e !== "Sneakers") setshowItem(!showItem)
  }

  // const closeCart = (e) => {
  //   console.log(e);
  //   if (e.textContent !== "Cart") setshowPrice(false)
  // }

  const cartPrice = () => {
    return totalPrice
  }

  const updateCartPrice = (price) => {
    totalPrice = price
    settotalPrice(totalPrice)
  }

  const [cartegoryName, setCartegoryName] = useState("")

  return (
    <Router>
      <div className="App" onClick={(e) => showCart}>
        <Header showCartPrice={() => setshowPrice(!showPrice)} logo="SHoLOGO" home="Home" product="Product" about="About" contact="Contact" cart="Cart" user="User" />
        {showPrice && <Cart cartPrice={cartPrice()} />}

        <Banner />
        <div className='cartegory-selection'>
          <span></span>
          {category.map(item => (
            <h4 key={item.id}><a href='./'>{item.name}</a></h4>
          ))}
          <span></span>
        </div>
        <div className='cartegory'>
          {category.map(item => (
            <Cartegory key={item.id} {...item} showCart={showCart} setCartegoryName={setCartegoryName} />
          ))}
        </div>
        <h1>{!showItem ? "No item on display" : `Available items in ${cartegoryName} cartegory`}</h1>
        {showItem && <Items newProduct={products} updateCartPrice={updateCartPrice} />}
        <Routes>
          <Route path='./components/About.js' component={About} />
        </Routes>

        <Footer />
      </div >
    </Router>
  );
}

export default App;
