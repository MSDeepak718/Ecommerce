import React,{useContext} from 'react'
import './Display.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../../Context/Context'


const Display = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='Display'>
        <div className="Display-left">
            <div className="img-list">
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
            </div>
            <div className="img">
                <img className="main-img" src={product.image} alt=""/>
            </div>
        </div>
        <div className="Display-right">
            <h1>{product.name}</h1>
            <div className="right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="right-prices">
                <div className="right-old-price">${product.old_price}</div>
                <div className="right-new-price">${product.new_price}</div>
            </div>
            <div className="right-description">
                A lightweight, usually knitted, pullover shirt, close-fittng and with a round neckine and short sleeves, worn as an undershirt or outer garment.
            </div>
            <div className="right-size">
                <h1>Select Size</h1>
                <div className="right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className="right-category"><span>Cagtegory: </span>Women, T-Shirt, Crop Top</p>
                <p className="right-category"><span>Tags: </span>Modern, Latest</p>
            </div>
        </div>
    </div>
  )
}

export default Display