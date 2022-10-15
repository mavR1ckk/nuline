import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import "./navbar1.css"

const Navbar1 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar fixed='top' container="sm" dark color='dark' expand="lg" style={{justifyContent:"center", alignItems:"center"}}>
                <div className='brand'>
                    <Link to={"/"}>
                        <img
                            className='brandLogo'
                            src='./images/navlogo.PNG'
                            alt="img"
                        />
                    </Link>
                    <p className='brandText' to={"/"}> Nuline nutrition</p>
                </div>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <Link className='link' aria-current='page' to='/'> Home </Link>
                        </NavItem>
                        <NavItem>
                            <Link className='link' to='/products'>All Products</Link>
                        </NavItem>
                        {/* <NavItem>
                            <Link className='link' to='/pricing'>Pricing</Link>
                        </NavItem> */}
                        <NavItem>
                            <Link className='link' to='/about'>About</Link>
                        </NavItem>
                        <NavItem>
                            <Link className='link log_in' to='#'>Log In</Link>
                        </NavItem>
                        <NavItem>
                            <Link className='link' to='/test'>test</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>            
        </div>
    );
};

export default Navbar1;