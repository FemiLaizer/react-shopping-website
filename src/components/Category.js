import './Category.css'

const Category = ({ name, img, showCart, setCategoryName }) => {

    const handleCategoryName = (e) => {
        setCategoryName(e)
        showCart(e)
    }

    return (
        <div className='Category' onClick={() => handleCategoryName(name)}>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <div className='shade'></div>
        </div>
    )
}

export default Category;