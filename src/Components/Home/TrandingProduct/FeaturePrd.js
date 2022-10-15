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
            <div className='row'>
                
            </div>
            <div className="row">
                <div className="col">col</div>
                <div className="col">col</div>
                <div className="col">col</div>
                <div className="col">col</div>
            </div>
            <div class="row">
                <div class="col-8">col-8</div>
                <div class="col-4">col-4</div>
            </div>
        </div>
    )
}

const Prod = ({ value }) => {
    
    return (
        <div>
            <div className="card col-3" style={{ width: "18rem" }} key={value.id}>

                <img src={value.img} classNmae="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{value.title}</h4>
                    <p className="card-text">{value.price}</p>
                </div>

            </div>
        </div>
    )
}

export default FeaturePrd