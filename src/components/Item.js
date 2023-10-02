import './Item.css'

const Item = ({ itemToView, updateQty, addToCart }) => {

    const { id, img, name, details, price, qty } = { ...itemToView }

    return (
        <section className='Item'>
            <div><h4>Selection / Selected / Item</h4></div>
            <div className='content-container'>
                <article>
                    <div className='big-img'>
                        <img src={img} alt='img-big' />
                    </div>
                    <div className='small-imgs'>
                        <div className='small'>
                            <img src={img} alt='img-1' />
                        </div>
                        <div className='small'>
                            <img src={img} alt='img-2' />
                        </div>
                        <div className='small'>
                            <img src={img} alt='img-3' />
                        </div>
                        <div className='small'>
                            <img src={img} alt='img-4' />
                        </div>
                    </div>
                </article>
                <article>
                    <div className='item-details'>
                        <h3>{itemToView.name}</h3>
                        <p>{itemToView.details}</p>
                    </div>
                    <div className='item-price' >
                        <h4>N{price}</h4>
                    </div>
                    <div className='item-price' >
                        <button className='MinusBtn' onClick={() => updateQty(id, qty - 1)} disabled={qty === 0 ? true : false}>-</button>
                        <p>{qty}</p>
                        <button className='AddBtn' onClick={() => updateQty(id, qty + 1)}>+</button>
                        <h4>Total: N{price * qty}</h4>
                    </div>
                    <div className='qty'>
                        <button className='AddItem'

                            disabled={qty === 0 ? true : false}>Buy Item</button>
                        <button className='AddItem' onClick={() => addToCart(name, qty, price * qty)}>Add to Cart</button>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Item