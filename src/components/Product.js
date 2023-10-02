import './Product.css';

function Product({ item, updateQty, addToCart, updateCartPrice, products, setView }) {
    const { id, img, name, details, price, qty } = { ...item }

    const sendItem = (itemToView) => {
        setView(itemToView)
    }

    return (
        <div className="Product">
            <div className='img'>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h3>{name}</h3>
                <p>{details}</p>
                <div className='price' >
                    <h4>N{price}</h4>
                    <button className='MinusBtn' onClick={() => updateQty(id, qty - 1)} disabled={qty === 0 ? true : false}>-</button>
                    <p>{qty}</p>
                    <button className='AddBtn' onClick={() => updateQty(id, qty + 1)}>+</button>
                    <h4>Total: N{price * qty}</h4>
                </div>
            </div>

            <div className='qtyBox'>
                <div className='qty'>
                    <button className='AddItem'
                        onClick={() => addToCart(name, qty, price * qty)}
                        disabled={qty === 0 ? true : false}>Add Item</button>
                    <button className='AddItem' onClick={() => sendItem(item)}>View Item</button>
                </div>
            </div>
        </div>
    );
}

export default Product;