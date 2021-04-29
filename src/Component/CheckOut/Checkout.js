import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Order from '../Order/Order';

const Checkout = () => {
    const {_id }= useParams();
    const [item, setItem] = useState([])

    useEffect(()=>{
        const url = `https://cherry-surprise-82565.herokuapp.com/products/${_id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data))
    },[])
    return (
        <div>
           {
               item.map(product =><Order add={product}></Order>)
           }
        </div>
    );
};

export default Checkout;