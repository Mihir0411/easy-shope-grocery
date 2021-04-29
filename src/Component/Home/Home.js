import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './home.css'

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://cherry-surprise-82565.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className="container product">
            {
                products.map(product =><Product product={product}></Product>)
            }
        </div>

    );
};

export default Home;