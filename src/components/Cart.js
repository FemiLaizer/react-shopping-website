import Button from './Button'
import './Cart.css'

const Cart = ({ cartPrice }) => {
    return (
        <div className="Cart">
            <h4>Your selection will appear below</h4>
            <div className='selection'></div>
            <h2 className='grand-total'>Grand Total : N{cartPrice}</h2>
            <Button text='Go To Payment' />
        </div>
    )
}

export default Cart