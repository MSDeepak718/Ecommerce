import React from 'react';
import './Content.css';
import hand_icon from '../assets/hand_icon.png';
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'

const Content = () => {
    return (
        <div className='hero'>
            <div className='left'>
                <h2>New Arrivals Only</h2>
                <div>
                    <div className='hand-icon'>
                        <p>new</p>
                        <img src={hand_icon} alt="hand"/>
                    </div>
                    <p>Collections</p>
                    <p>For Everyone</p>
                </div>
                <div className="latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="arrow"/>
                </div>
            </div>
            <div className='right'>
                <img src={hero_image} alt='hero'/>
            </div>
        </div>
    )
}

export default Content;