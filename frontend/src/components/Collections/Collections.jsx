import React from 'react'
import './Collections.css'
import new_collection from '../assets/new_collections';
import Item from '../Item/Item';

const Collections = () => {
  return (
    <div className="collection">
        <h1>New Collections</h1>
        <hr/>
        <div className="sub">
            {
                new_collection.map((item,index) => {
                    return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })
            }
        </div>
    </div>
  )
}

export default Collections