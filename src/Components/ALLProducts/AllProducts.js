import React, { useEffect, useState } from "react";
import Api, { getProducts } from "../API/Api";
import Product from "../Product/Product";
import "../Product/product.css"


const AllProducts = () => {
    const [products, setProducts] = useState([
        {
            "productId": "prd3",
            "title": "Advance EAA",
            "price": 2697,
            "img": "./images/eaa.jpeg",
            "descriptions": [
                "Triple strength 1200mg fish oil",
                "540mg EPA",
                "360mg DHA",
                "60 Servings"
            ],
            "featured": true
        },
        {
            "productId": "prd6",
            "title": "Advance BCAA",
            "price": 2397,
            "img": "./images/bcaa.jpeg",
            "descriptions": [
                "7000mg BCAA",
                "500mg L glutamine",
                "500mg L citrulline",
                "1000mg electrolytes blends"
            ],
            "featured": true
        },
        {
            "productId": "prd7",
            "title": "Advance EAA",
            "price": 2697,
            "img": "./images/eaa.jpeg",
            "descriptions": [
                "Triple strength 1200mg fish oil",
                "540mg EPA",
                "360mg DHA",
                "60 Servings"
            ],
            "featured": true
        },
        {
            "productId": "prd8",
            "title": "Pre workout",
            "price": 2497,
            "img": "./images/pre-workout.jpeg",
            "descriptions": [
                "30500mg Beta alanine",
                "3000mg L citrulline",
                "300mg caffeine",
                "100mg L theanine",
                "500mg electrolytes blend"
            ],
            "featured": true
        }
    ]);

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