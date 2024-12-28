import React, {useContext} from 'react';
import { ShopContext } from '../Context/Context';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrum/Breadcrum';
import Display from '../components/Display/Display';
import Description from '../components/Description/Description';
import Related from '../components/Related/Related';

const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e)=>e.id === Number(productId));
    return (
        <div>
            <Breadcrum product={product}/>
            <Display product={product}/>
            <Description/>
            <Related/>
        </div>
    )
}

export default Product;