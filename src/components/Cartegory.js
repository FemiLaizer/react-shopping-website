import React from 'react'

const Cartegory = ({ name, img }) => {
    return (
        <div className='Cartegory' style={{ backgroundImage: img }}>
            <h2>{name}</h2>
        </div>
    )
}

export default Cartegory