import Button from './Button'
import './Cart.css'
import AddedItem from './AddedItem';

const Cart = ({ addedItem, paymentMode, removeCartItem }) => {

    const cartTotal = addedItem.reduce((productSum, item) => (
        productSum + item.qty * item.price
    ), 0).toFixed(2);

    return (
        <div className="Cart">
            <h4>You have {addedItem.length} items in your Cart</h4>
            <div className='selection'>
                <div className='selection-heading'>
                    <h4>Name</h4>
                    <h4>Qty</h4>
                    <h4>Price</h4>
                    <h4>Remove</h4>
                </div>
                {addedItem.map((item, index) => (
                    <AddedItem key={index} {...item} removeCartItem={removeCartItem} />
                ))}
            </div>
            <h2 className='grand-total'>Grand Total : N{cartTotal}</h2>
            <Button text='Go To Payment' btnClick={() => paymentMode()} />
        </div>
    )
}

export default Cart