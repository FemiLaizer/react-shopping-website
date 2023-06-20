import './App.css';
import Header from './components/Header'
import SearchBox from './components/SearchBox';
import Banner from './components/Banner';

import { category } from './components/CartShop'
import Cartegory from './components/Cartegory';
import { useState } from 'react';

function App() {
  // const [category, setCategory] = useState()

  const showCart = (id, name) => {
    console.log(id, name);
  }

  return (
    <div className="App">
      <Header logo="LOGO" home="Home" product="Product" about="About" contact="Contact" cart="Cart" user="User" />
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
          <Cartegory key={item.id} {...item} showCart={() => showCart(item.id, item.name)} />
        ))}
      </div>
    </div >
  );
}

export default App;
