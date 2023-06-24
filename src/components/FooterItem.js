import './FooterItem.css'

const FooterItem = ({ home, product, about, contact, user, copy, back }) => {
    return (
        <div className='Footer-item'>
            <p>{home}</p>
            <p>{product}</p>
            <p>{about}</p>
            <p>{contact}</p>
            <p ></p>
            <p>{user}</p>
            <span>{copy}</span>
            <a href="./About.js">{back}</a>
        </div>
    )
}

export default FooterItem