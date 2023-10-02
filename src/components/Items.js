import { useState, useEffect } from 'react';
import './Items.css';
import Product from './Product';


function Items({ initialProducts, addToCart, setView }) {

    // Checking if there are products in the localstorage
    const newProducts = JSON.parse(window.localStorage.getItem('products'))
    const [products, setProducts] = useState(initialProducts)


    // useEffect to update and save into localstorage 
    useEffect(() => {
        window.localStorage.setItem('products', JSON.stringify(products))
    }, [products])

    const updateQty = (id, newQty) => {
        const newProducts = products.map(product => {
            if (product.id === id) {
                return { ...product, qty: newQty }
            }
            return product;
        })
        setProducts(newProducts);
    }

    return (
        <div className="Items">

            <div className='itemBox'>
                {products.map((items, i) => (
                    items.map((item, i) => (
                        <Product key={i} item={item}
                            updateQty={updateQty} addToCart={addToCart} setView={setView} />
                    ))
                ))}
            </div>

        </div>
    );
}

export default Items;