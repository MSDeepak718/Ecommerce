import React, {createContext,useState} from 'react';
import all_product from '../components/assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let idx=0;idx<all_product.length+1;idx++){
        cart[idx] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItem,setCartItem] = useState(getDefaultCart);
    const addToCart = (itemId) => {
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    }
    const removeFromCart = (itemId) => {
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item));
                totalAmount += itemInfo.new_price*cartItem[item]
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItem){
            if(cartItem[item]!==0){
                totalItem += cartItem[item];
            }
        }
        return totalItem;
    }
    const contextValue = {all_product,cartItem,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;