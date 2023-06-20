import React from 'react'
import './Cartegory.css'

const Cartegory = ({ name, img }) => {
    return (
        <div className='Cartegory'>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <div className='shade'></div>
        </div>
    )
}

export default Cartegory