import './App.css';
import Header from './components/Header'
import SearchBox from './components/SearchBox';
import CartArea from './components/CartArea';

import { category } from './components/CartShop'
import Cartegory from './components/Cartegory';
import { useState } from 'react';

function App() {
  // const [category, setCategory] = useState()

  return (
    <div className="App">
      <Header logo="LOGO" home="Home" product="Product" about="About" contact="Contact" cart="Cart" user="User" />
      <SearchBox />
      <CartArea />
      {category.map(item => {
        return (
          <Cartegory key={item.id} item={item} />
        )
      })}

    </div >
  );
}

export default App;
