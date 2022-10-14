import React from 'react';
import "./prductList.css"
import AllProducts from './AllProducts';

const ProductsList = () => {
    return (
        <div >
            <div className='heading'>Products available with us.</div>
            <AllProducts />
        </div>
    );
};

export default ProductsList;