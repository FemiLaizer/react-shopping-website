import './Header.css'

function Header({ showCartPrice, icon, logo, home, product, about, contact, cart, user }) {

    const priceDisplay = (e) => {
        showCartPrice(e)
        // closeCart(e)
    }

    return (
        <div className="Header">
            <p className='logo'>{logo}</p>
            <div className='menu'>
                <p>{home}</p>
                <p>{product}</p>
                <p>{about}</p>
                <p>{contact}</p>
                <p onClick={(e) => priceDisplay(e.currentTarget)}>{cart}</p>
                <p>{user}</p>
            </div>
            <div id='cart-icon' onClick={(e) => showCartPrice(e.currentTarget)}>{cart}</div>
        </div>
    );
}

export default Header;