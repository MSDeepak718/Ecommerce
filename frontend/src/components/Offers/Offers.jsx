import React from 'react'
import './Offers.css';
import exclusive_image from '../assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className='offers'>
        <div className="o-left">
            <h1>Exclusive</h1>
            <h1>Offers For you</h1>
            <p>Only on Best Sellers Products</p>
            <button>Check Now</button>
        </div>
        <div className="o-right">
            <img src={exclusive_image} alt=""/>
        </div>

    </div>
  )
}

export default Offers