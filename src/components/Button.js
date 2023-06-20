import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ color, text, btnClick }) => {


    return (

        <button
            onClick={btnClick}
            style={{ backgroundColor: color }}
            className="Button">{text}
        </button>
    )
}

// You can use these as default
Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button