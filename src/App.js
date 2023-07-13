import { React, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './components/Banner';
import Items from './components/Items';
import About from './components/About';
import Cart from './components/Cart';
import Cartegory from './components/Cartegory';

import { category, products, selection } from './components/Shop'

function App() {

  const [showItem, setshowItem] = useState(true)
  const [showPrice, setshowPrice] = useState(false)
  const [cartegoryName, setCartegoryName] = useState("")

  const showCart = (e) => {
    if (e === "Sneakers") setshowItem(!showItem)
  }

  // let [cartTotal, settotalPrice] = useState(0)

  const [addedItem, setCartItem] = useState(selection)

  const addToCart = (itemName, itemQty, itemPrice, itemId) => {
    const newlyAdded = { name: itemName, qty: itemQty, price: itemPrice, id: itemId }
    setCartItem([...addedItem, newlyAdded]);
  }

  const paymentMode = () => {
    console.log("You are about to make payment");
  }
  const removeCartItem = () => {
    console.log("Item removed from Cart!!!");
  }

  useEffect(() => {

  },)

  return (
    <Router>
      <div className="App" onClick={(e) => showCart}>
        <Header showCartPrice={() => setshowPrice(!showPrice)}
          logo="SHoLOGO" home="Home" product="Product"
          about="About" contact="Contact" cart="Cart" user="User" />
        {showPrice && <Cart addedItem={addedItem} paymentMode={paymentMode} removeCartItem={removeCartItem} />}

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
        <h1>{!showItem ? "No item on display" : `Available items in ${cartegoryName} category`}</h1>
        {showItem && <Items newProduct={products} addToCart={addToCart} />}
        <Routes>
          <Route path='./components/About.js' component={About} />
        </Routes>

        <Footer />
      </div >
    </Router>
  );
}

export default App;
