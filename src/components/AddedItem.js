import Button from './Button'
import './AddedItem.css'

const AddedItem = ({ name, qty, price, removeCartItem }) => {

    return (
        <div className="AddedItem" >
            <h5>{name}</h5>
            <h5>{qty}</h5>
            <h5>{price}</h5>
            <Button text="X" padding="0 20px" height="10px" color="#520808" btnClick={() => removeCartItem()} />
        </div>
    )
}

export default AddedItem;