import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText, Row, div, CardImg } from 'reactstrap';
import "./product.css"
function Product({ product }) {
    const img = product.img;
    return (
        <div className="fcard">
            <Card>
                <div className="fcontainer ">
                    <div className="f_img " >
                        <p>
                            {product.title}
                        </p>
                        <img className="prd_img"
                            alt="Card cap"
                            src={require(`../../IMG/${img}`)}
                        />
                    </div>
                    <div className="f_desc" >
                        <p className="descText" >
                            {product.description.map((item) => <p>&#8226; {item}</p>)}
                        </p>
                    </div>
                    <div className="f_btns text-center">
                        <div className="priceTxt">
                            <p>
                                Price {product.price}
                            </p>
                        </div>
                        {/* <Row className="main-container">
                            <Button
                                outline
                                className="class-div"
                                divor="secondary"
                                padding='20'
                                style={{ marginTop: 10, width: 150 }}
                            >
                                Add to cart
                            </Button>
                        </Row> */}
                        <div className="fcontainer">
                            <Link class="btn btn-secondary btn-lg" to={"#"}>
                                More info
                            </Link>
                        </div>
                    </div>
                </div>
            </Card>

        </div>
    )
}

export default Product;