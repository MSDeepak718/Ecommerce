import React from 'react';
import Hero from '../components/Content/Content'
import Popular from '../components/Popular/Popular';
import Offers from '../components/Offers/Offers';
import Collections from '../components/Collections/Collections';
import Newsletter from '../components/NewsLetter/Newsletter';

const Shop = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <Collections/>
            <Newsletter/>
        </div>
    )
}

export default Shop;