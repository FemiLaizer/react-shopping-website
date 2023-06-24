import './Cartegory.css'

const Cartegory = ({ name, img, showCart }) => {
    return (
        <div className='Cartegory' onClick={() => showCart(name)}>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <div className='shade'></div>
        </div>
    )
}

export default Cartegory