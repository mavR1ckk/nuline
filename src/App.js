import React, { Fragment, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import WebFont from "webfontloader";
import Public from './Components/Public';
import DashBoard from './Components/Admin/DashBoard';
import Home from './Components/Home/Home';
import Pricing from './Components/Pricing';
import About from './Components/AboutComp/About';
import ProductsList from './Components/ALLProducts/ProductsList';
import Navbar1 from './Components/Navbar/Navbar1';
import Footer from './Components/Footer/Footer';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

  }, []);
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar1 />
        <body>
        <div >
            <h1 className='align-center'>All Products</h1>
            <div className='fcontainer'>
                <div className='fitem1'></div>
                <div className='fitem2'></div>         
            </div>
        </div>

          <Routes>
            {/* <Route path='/' element={<Public/>}></Route>
            <Route path='/admin' element={<DashBoard/>}></Route> */}            
            <Route path='/' element={<Home />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<ProductsList />} />
          </Routes>
        </body>
        <Footer />
      </BrowserRouter>
    </Fragment>

  );
}
export default App;
