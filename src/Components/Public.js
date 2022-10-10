import React, { Fragment } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Footer from './Footer/Footer';
import Home from './Home/Home';
import About from './AboutComp/About';
import Pricing from './Pricing';
import ProductsList from './ALLProducts/ProductsList';
import Navbar1 from './Navbar/Navbar1';

const Public = () => {
    return (
        <Fragment>
            
            <Navbar1/>
            <body>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/public/pricing' element={<Pricing />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/products' element={<ProductsList />} />
                </Routes>
            </body>
            <Footer />
        </Fragment>
    );
};

export default Public;