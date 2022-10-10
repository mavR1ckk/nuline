import React from "react";
import { Row, Container } from "reactstrap";
import "./Footer.css";


function Footer() {

    return (
        <footer id="footer">
            <Container>
                <Row>
                    <div className="leftFooter col-2">
                        <h4 className="h4_2">Contact Us</h4>
                        <p>R.No 3/2, Hariyali Village,<br></br>
                            Navjeevan no.2, Vikroli East, <br></br>
                            Mumbai 400083<br></br>
                            Contact : 7218 34 2133
                        </p>
                        {/* <h4>DOWNLOAD OUR APP</h4>
                <p>Download App for Android and IOS mobile phone</p>
                <img src={require(`../../IMG/${Appstore}`)} alt="playstore" />
            <img src={require(`../../IMG/${playStore}`)} alt="Appstore" /> */}
                    </div>

                    <div className="midFooter col-8">
                        <img
                            style={{ width: '10rem', marginBottom: '1rem' }}
                            src={require('../../IMG/Logo.PNG')}
                            alt="img"
                        />
                        <h1 className="h1_1 ">Nuline Nutrition</h1>
                        <div>
                            <p className="h4_1 align-center">High Quality is our first priority</p>
                            <p className="p_1 align-center">Copyrights 2022 &copy; Nuline</p>
                        </div>
                    </div>

                    <div className="rightFooter col-2">
                        <h4>Follow Us</h4>
                        <a href="http://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">Youtube</a>
                        <a href="http://facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
                    </div>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;