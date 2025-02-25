import React from 'react';
import './Popular.css';
import product_data from '../assets/data';
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>Popular in Women</h1>
        <hr/>
        <div className="p-item">
            {product_data.map((item,index) => {
                return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular