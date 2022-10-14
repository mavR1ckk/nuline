import React, { useEffect, useState } from "react";
import Api from "../API/Api";
import Product from "../Product/Product";
import "../Product/product.css"


const AllProducts = () => {
    const [products, setProducts] = useState([
        // { title: "Real Mass gainer", description: ["15gm of protein", "74gm of complex carb", "3000mg creatine", "2000mg L glutamine", "1000mg BCAA"], price: "3997", img: "mass.jpeg" },
        // { title: "Advance BCAA", description: ["7000mg BCAA", "500mg L glutamine", "500mg L citrulline", "1000mg electrolytes blends"], price: "2397", img: "bcaa.jpeg" },
        // { title: "Advance EAA", description: ["Triple strength 1200mg fish oil", "540mg EPA", "360mg DHA", "60 Servings"], price: "2697", img: "eaa.jpeg" },
        // { title: "Pre workout", description: ["30500mg Beta alanine", "3000mg L citrulline", "300mg caffeine", "100mg L theanine", "500mg electrolytes blend"], price: "2497", img: "pre-workout.jpeg" },
        // { title: "Real Mass gainer", description: ["15gm of protein", "74gm of complex carb", "3000mg creatine", "2000mg L glutamine", "1000mg BCAA"], price: "3997", img: "mass.jpeg" },
        // { title: "Advance BCAA", description: ["7000mg BCAA", "500mg L glutamine", "500mg L citrulline", "1000mg electrolytes blends"], price: "2397", img: "bcaa.jpeg" },
        // { title: "Advance EAA", description: ["Triple strength 1200mg fish oil", "540mg EPA", "360mg DHA", "60 Servings"], price: "2697", img: "eaa.jpeg" },
        // { title: "Pre workout", description: ["30500mg Beta alanine", "3000mg L citrulline", "300mg caffeine", "100mg L theanine", "500mg electrolytes blend"], price: "2497", img: "pre-workout.jpeg" }
    ]);

    useEffect(()=>{
        Api.get("/getProducts")
        .then((response)=>{
            setProducts(response.data)
        })
    })
    
    return (
        <div className="fcard1">
            {
                products.map((prod) => <Product product={prod} key={prod.id}/>)
            }
        </div>
    )
}
export default AllProducts;