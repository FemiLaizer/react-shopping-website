import './AddedItem.css'

const AddedItem = ({ id, name, qty, price, removeCartItem }) => {

    return (
        <div className="AddedItem" >
            <h5>{name}</h5>
            <h5>{qty}</h5>
            <h5>{price}</h5>
            <h3 id='remove' onClick={() => removeCartItem(id, name)}>&times;</h3>
        </div>
    )
}

export default AddedItem;