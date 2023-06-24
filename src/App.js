import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchBox from './components/SearchBox';
import Banner from './components/Banner';
import Items from './components/Items';
import About from './components/About';
import Cart from './components/Cart';

import { category } from './components/CartShop'
import { products } from './components/Products'
import Cartegory from './components/Cartegory';
import { useState } from 'react';

function App() {
  const [showItem, setshowItem] = useState(false)
  const [showPrice, setshowPrice] = useState(false)

  let [totalPrice, settotalPrice] = useState(0)

  const showCart = (e) => {
    if (e === "Sneakers") setshowItem(!showItem)
    if (e !== "Sneakers") setshowPrice(!showPrice)
  }

  const cartPrice = () => {
    return totalPrice
  }

  const updateCartPrice = (price) => {
    totalPrice = price
    settotalPrice(totalPrice)
  }

  return (
    <Router>
      <div className="App">
        <Header showCartPrice={showCart} logo="LOGO" home="Home" product="Product" about="About" contact="Contact" cart="Cart" user="User" />
        {showPrice && <Cart cartPrice={cartPrice()} />}
        <SearchBox />

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
            <Cartegory key={item.id} {...item} showCart={showCart} />
          ))}
        </div>
        <h1>These are available items</h1>
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
