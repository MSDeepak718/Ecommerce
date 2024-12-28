import React, { useContext } from 'react'
import './css/Category.css';
import { ShopContext } from '../Context/Context';
import dropdown_icon from '../components/assets/dropdown_icon.png'
import all_product from '../components/assets/all_product';
import Item from '../components/Item/Item';

const Category = (props) => {

    const {all_products} = useContext(ShopContext);
    return (
        <div className="shop-category">
            <img src={props.banner} alt="" className='banner'/>
            <div className="indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="products">
                {
                    all_product.map((item,index) => {
                        if(props.category===item.category){
                            return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                        }
                        else{
                            return null;
                        }
                    })
                }
            </div>
            <div className="load">
                Explore More
            </div>
        </div>
    )
}

export default Category;