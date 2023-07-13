import { useState } from 'react';
import './Items.css';
import Product from './Product';

function Items({ newProduct, addToCart }) {

    const [products, setProducts] = useState(newProduct)

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
                {products.map((item) => (
                    <Product key={item.id} {...item}
                        updateQty={updateQty} addToCart={addToCart} />
                ))}
            </div>

        </div>
    );
}

export default Items;