import React, { Fragment, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import WebFont from "webfontloader";
import Home from './Components/Home/Home';
import Pricing from './Components/ALLProducts/Pricing';
import About from './Components/AboutComp/About';
import ProductsList from './Components/ALLProducts/ProductsList';
import Navbar1 from './Components/Navbar/Navbar1';
import Footer from './Components/Footer/Footer';
import FeaturePrd from './Components/Home/TrandingProduct/FeaturePrd';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar1 />
        <div className='body'>
          <Routes>
            {/* <Route path='/' element={<Public/>}></Route>
            <Route path='/admin' element={<DashBoard/>}></Route> */}            
            

            <Route path='/' element={<Home />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<ProductsList />} />
            <Route path='/test' element={<FeaturePrd />} />
            
          </Routes>
          </div>
        <Footer />
      </BrowserRouter>
    </>

  );
}
export default App;
