import React,{useContext} from 'react'
import './CartItems.css'
import remove_icon from '../assets/cart_cross_icon.png'
import { ShopContext } from '../../Context/Context'


const CartItems = () => {
    const {all_product,cartItem,removeFromCart,getTotalCartAmount} = useContext(ShopContext);
    console.log(cartItem);
  return (
    <div className='cartitems'>
        <div className="format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        <div>
            <hr />
            {all_product.map((e)=>{
                if(cartItem[e.id]>0){
                    return <div>
                        <div className="format format-main">
                            <img src={e.image} alt="" className='product-icon'/>
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='quantity'>{cartItem[e.id]}</button>
                            <p>${e.new_price*cartItem[e.id]}</p>
                            <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=""  className='remove-icon'/>
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className="down">
            <div className="total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>Proceed to checkout</button>
            </div>
            <div className="promo">
                <p>If you have a promo code, Enter it here</p>
                <div className="promobox">
                    <input type="text" placeholder='promo code'/>
                    <button>Submit</button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems