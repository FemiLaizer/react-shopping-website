import React from 'react'
import './Banner.css'
import Button from './Button'

const CartArea = () => {
    return (
        <div className='Banner'>
            <div className='banner'>
                <div className='banner-content'>
                    <h1>Shopping-Cart-Website</h1>
                    <p>Buy anything at discount price. Shopping and shipping at your convinience.</p>
                    <Button color={"#f5963d"} text="Shop Now" />
                </div>
            </div>

        </div>
    )
}

export default CartArea