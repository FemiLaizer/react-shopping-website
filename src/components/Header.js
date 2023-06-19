import './Header.css'

function Header({ icon, logo, home, product, about, contact, cart, user }) {
    return (
        <div className="Header">
            <p>{logo}</p>
            <p className='menu'>
                <a href='./'>{home}</a>
                <a href='./'>{product}</a>
                <a href='./'>{about}</a>
                <a href='./'>{contact}</a>
                <a href='./'>{cart}</a>
                <a href='./'>{user}</a>
            </p>
        </div>
    );
}

export default Header;