import Button from './Button'
import './Cart.css'

const Cart = ({ cartPrice }) => {
    return (
        <div className="Cart">
            <h2>Grand Total : N{cartPrice}</h2>
            <Button text='Go To Payment' />
        </div>
    )
}

export default Cart