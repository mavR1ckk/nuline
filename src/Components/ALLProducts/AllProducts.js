import React, { useEffect, useState } from "react";
import Api, { getProducts } from "../API/Api";
import Product from "../Product/Product";
import "../Product/product.css"


const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Api.get("/getProducts")
            .then((response) => {
                setProducts(response.data)
            })
    }, [])

    return (
        <div className="fcard1">
            {
                products.map((prod) => <Product product={prod} key={prod.id} />)
            }
        </div>
    )
}
export default AllProducts;