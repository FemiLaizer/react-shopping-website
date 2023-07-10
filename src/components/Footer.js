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
                copy="Copyright &copy; 2023"
                back="Back" />

            <FooterItem className='footer-item' home="Our Team"
                product="Exchanges"
                about="Buy Wholesale"
                contact="Smooth Site"
                user="Partner With Us"
                copy="Go Shopping"
                back="" />
            <FooterItem className='footer-item' home="English"
                product="France"
                about="Chinese"
                contact="Germany"
                user="Yoruba"
                copy=""
                back="" />
            <FooterItem className='footer-item' home="Social Media Links" />
        </footer>
    )
}

export default Footer