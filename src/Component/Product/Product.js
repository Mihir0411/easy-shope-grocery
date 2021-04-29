import React from 'react';
import { Link } from 'react-router-dom';
import './add.css'


const Product = (props) => {
    const { _id, name, imageURL, price } = props.product
    return (
        <div className="addProduct">
            <img src={imageURL} alt="" />
            <h5>{name}</h5>
            <div className="d-flex">
                <h5>${price}</h5>
                <Link to={`/checkout/${_id}`}><button className="buyBtn">Buy Now</button></Link>
            </div>
        </div>
    );
};

export default Product;