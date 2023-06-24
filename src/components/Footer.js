import './Footer.css'
import FooterItem from './FooterItem'

const Footer = () => {
    return (
        <footer className='Footer'>
            <FooterItem className='footer-item' home="Home"
                product="Products"
                about="About"
                contact="Contact"
                user="Acount"
                copy="Copyright & copy; 2023"
                back="Back" />
            <FooterItem className='footer-item' />
            <FooterItem className='footer-item' />
            <FooterItem className='footer-item' home="Socail Media" />
        </footer>
    )
}

export default Footer