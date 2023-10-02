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
import Item from './components/Item';

import { category } from './data/Shop'
import { selection } from './data/Selection'
import SearchBox from './components/SearchBox';

const shopProducts = category.map(category => (
  [...category.products]
))

function App() {

  const [showItem, setshowItem] = useState(true)
  const [showPrice, setshowPrice] = useState(false)
  const [categoryName, setCategoryName] = useState("")
  const [newCategory, setnewCategory] = useState(category)
  const [filteredProducts, setfilteredProducts] = useState(shopProducts)
  const [viewItem, setViewItem] = useState(false)

  console.log();

  const showCart = (e) => {
    if (e === "Sneakers") {
      setshowItem(!showItem)
    } else {
      setshowItem(showItem)
    }
  }

  const filterCategory = (e) => {
    const filteredCategory = ["All", ...category].filter(items => e.textContent === items.name)
    if (e.textContent === "All") {
      setnewCategory(category)
    } else {
      setnewCategory(filteredCategory)
    }
  }

  const [itemToView, setItemToView] = useState("")

  const receivedItemToView = (receivedItem) => {
    setViewItem(!viewItem)
    setItemToView(receivedItem)
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

  document.querySelector('body').addEventListener('click', (e) => {
    // console.log(e.target);
    // console.log(e.currentTarget);
    if (!e.target && showPrice === true) {
      setshowPrice(false)
    }
    if (!e.target && viewItem === true) {
      setViewItem(false)
    }
  })

  return (
    <Router>
      <div className="App" onClick={(e) => showCart}>
        <Header showCartPrice={() => setshowPrice(!showPrice)}
          logo="SHoLOGO" home="Home" product="Product"
          about="About" contact="Contact" cart="Cart" user="User" />
        {showPrice && <Cart addedItem={addedItem} paymentMode={paymentMode} removeCartItem={removeCartItem} />}

        <Banner />

        <div className='category-selection'>
          {["All", ...category.map(item => item.name)].map((name, index) => (
            <h4 key={index} onMouseOver={(e) => filterCategory(e.currentTarget)}>
              {name}
            </h4>
          ))}

          <SearchBox />
        </div>
        <div className='category'>
          {newCategory.map(item => (
            <Category key={item.id} {...item} showCart={showCart} setCategoryName={setCategoryName} />
          ))}
        </div>
        <h1>{!showItem ? "No item on display" : `Available items in ${categoryName.toLowerCase()} category`}</h1>
        {showItem && <Items initialProducts={shopProducts}
          addToCart={addToCart} setView={(e) => receivedItemToView(e)} />}
        {viewItem && <Item addToCart={addToCart} itemToView={itemToView} />}
        <Routes>
          <Route path='./components/About.js' component={About} />
        </Routes>

        <Footer />
      </div >
    </Router>
  );
}

export default App;
