import React from "react";
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText, Row, Col, CardImg } from 'reactstrap';

function Product({ product }) {
    const img = product.img;
    return (
        <div>
            <Card>
                <Row style={{backgroundColor:"#E8E8E8"}}>
                    <Col md='4' >
                        <CardBody>
                            <CardTitle tag="h4" className="h3_1">
                                {product.title}
                            </CardTitle>
                        </CardBody>
                        <img style={{ width: '10rem', paddingBottom: 20, marginLeft: 10 }}
                            alt="Card cap"
                            src={require(`../IMG/${img}`)}
                        />
                    </Col>
                    <Col md='5' >
                        <CardBody >
                            <CardText className="descText" tag="h5" >
                                {product.description.map((item) => <p>&#8226; {item}</p>)}
                            </CardText>
                        </CardBody>
                    </Col>
                    <Col md='2' className="text-center" style={{ padding: 20, marginTop: 50 }}>
                        <Row>
                            <CardSubtitle
                                className="descText"
                                tag="h4"
                            >
                                Price {product.price}
                            </CardSubtitle>
                        </Row>
                        {/* <Row className="main-container">
                            <Button
                                outline
                                className="class-col"
                                color="secondary"
                                padding='20'
                                style={{ marginTop: 10, width: 150 }}
                            >
                                Add to cart
                            </Button>
                        </Row> */}
                        <Row className="main-container">
                            <Button color="secondary" className="class-col"
                                style={{ marginTop: "1rem", marginBottom: "1rem", width: '1rem', height:"3rem" }}
                            >
                                <p className="btnTxt">More info</p>
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Card>

        </div>
    )
}

export default Product;