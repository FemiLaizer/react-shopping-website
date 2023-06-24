import { useState } from 'react';
import './Items.css';
import Product from './Product';

function Items({ newProduct, updateCartPrice }) {

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

    const grandTotal = products.reduce((productSum, item) => (
        productSum + item.qty * item.price
    ), 0).toFixed(2);

    updateCartPrice(grandTotal);

    return (
        <div className="Items">

            <div className='itemBox'>
                {products.map((item) => (
                    <Product key={item.id} {...item} updateQty={updateQty} />
                ))}
            </div>

        </div>
    );
}

export default Items;