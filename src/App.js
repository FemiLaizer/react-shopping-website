import { React, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './components/Banner';
import Items from './components/Items';
import About from './components/About';
import Cart from './components/Cart';
import Category from './components/Category';

import { category, initialProducts, selection } from './components/Shop'
import SearchBox from './components/SearchBox';

function App() {

  const [showItem, setshowItem] = useState(false)
  const [showPrice, setshowPrice] = useState(false)
  const [categoryName, setCategoryName] = useState("")
  const [newCategory, setnewCategory] = useState(category)

  const showCart = (e) => {
    if (e === "Sneakers") {
      setshowItem(!showItem)
    } else {
      setshowItem(showItem)
    }
  }

  const filterCategory = (e) => {
    // let filteredCategory = category
    if (e.textContent === "All") {
      setnewCategory(category)
    } else {
      const filteredCategory = category.filter(item =>
        e.textContent === item.name)
      setnewCategory(filteredCategory)
    }
  }

  const [addedItem, setCartItem] = useState(selection)

  const addToCart = (itemName, itemQty, itemPrice, itemId) => {
    const newlyAdded = { name: itemName, qty: itemQty, price: itemPrice, id: itemId }
    setCartItem([...addedItem, newlyAdded]);
    alert(`${itemQty} ${itemName} added to Cart`)
  }

  const removeCartItem = (id, name) => {
    alert(`Item ${name} removed from Cart!!!`);
    const newCartItem = addedItem.filter(item => item.id !== id)
    setCartItem(newCartItem)
  }

  const paymentMode = () => {
    alert("You are about to make payment");
  }

  return (
    <Router>
      <div className="App" onClick={(e) => showCart}>
        <Header showCartPrice={() => setshowPrice(!showPrice)}
          logo="SHoLOGO" home="Home" product="Product"
          about="About" contact="Contact" cart="Cart" user="User" />
        {showPrice && <Cart addedItem={addedItem} paymentMode={paymentMode} removeCartItem={removeCartItem} />}

        <Banner />
        <div className='category-selection'>
          <h4 ><a href='./' onMouseOver={(e) => filterCategory(e.currentTarget)}>All</a></h4>
          {category.map(item => (
            <h4 key={item.id} ><a href='./' onMouseOver={(e) => filterCategory(e.currentTarget)}>{item.name}</a></h4>
          ))}
          <SearchBox />
        </div>
        <div className='category'>
          {newCategory.map(item => (
            <Category key={item.id} {...item} showCart={showCart} setCategoryName={setCategoryName} />
          ))}
        </div>
        <h1>{!showItem ? "No item on display" : `Available items in ${categoryName.toLowerCase()} category`}</h1>
        {showItem && <Items initialProducts={initialProducts} addToCart={addToCart} />}
        <Routes>
          <Route path='./components/About.js' component={About} />
        </Routes>

        <Footer />
      </div >
    </Router>
  );
}

export default App;
