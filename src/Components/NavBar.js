import React from 'react';
import { MDBNavbar, MDBContainer, MDBNavbarNav } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { Button } from "reactstrap";

function NavBar() {

    return (
        <div style={{width:"100vw"}}>
            <MDBNavbar expand='lg' dark style={{backgroundColor:"#212221"}}>
                <MDBContainer flex>
                    <div>
                        <Link className='logo' to={"/"}>
                            <img
                                style={{ width: '5rem' }}
                                src={require('../IMG/Logo.PNG')}
                                alt="img"
                            />
                        </Link>
                    </div>
                    <h4 className="logo_text">Nuline Nutrition</h4>
                    <MDBNavbarNav className='text-lg me-auto mb-2 mb-lg-0'>

                        <Link className='link' aria-current='page' to='/'> Home </Link>

                        <Link className='link' to='/products'>Products</Link>

                        <Link className='link' to='/pricing'>Pricing</Link>

                        <Link className='link' to='/about'>About</Link>

                    </MDBNavbarNav>
                    <div >
                        <div style={{ float: 'right' }}>
                            <Button  style={{ width: '7rem'}}>
                               <p className='btnTxt'>Log in</p> 
                                </Button>
                        </div>
                    </div>
                </MDBContainer>
            </MDBNavbar>
            <div>
                <img
                    style={{ width: '100%' }}
                    src={require('../IMG/NAV1.PNG')}
                    alt="img"
                />
            </div>
        </div>
    );
}

export default NavBar;