import React, { useEffect, useState } from 'react'
import Api from '../../API/Api';
import "./FeaturePrd.css"

const FeaturePrd = () => {

    const [products, setFeatured] = useState([]);

    useEffect(() => {
        Api.get("/featuredProduct")
            .then((response) => {
                setFeatured(response.data)
            })
    }, [])

    return (
        <div className='container'>
            <div className='row align-items-center'>
            {
                products.map((value) => {
                    return (
                        <div className="card" style={{ width: "18rem" }} key={value.id}>
                            <img src={value.img} classNmae="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">{value.title}</h4>
                                <p className="card-text">{value.price}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default FeaturePrd