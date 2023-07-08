import './Cartegory.css'

const Cartegory = ({ name, img, showCart, setCartegoryName }) => {

    const handleCartegoryName = (e) => {
        setCartegoryName(e)
        showCart(e)
    }

    return (
        <div className='Cartegory' onClick={() => handleCartegoryName(name)}>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <div className='shade'></div>
        </div>
    )
}

export default Cartegory