import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import Orders from '../Orders/Orders';
import './Order.css'

const Order = (props) => {
    const { name, _id, price,email } = props.add
    console.log(props.add.name)

    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    const handleBookings = data => {
        const selectItem = {
            name: name,
            price: price,
            email: loggedInUser.email
        }
        const url = `https://cherry-surprise-82565.herokuapp.com/selectProduct`
        fetch(url, {
            method: "POST",
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(selectItem)
        })
            .then(res => console.log('success'))
    }

    return (
        <div className="container check">
            <h4>Product Name: {name}</h4>
            <h4>Quantity: 1</h4>
            <h4>Price: ${price}</h4>
            <Link to="/order"><button className="checkout" onClick={handleBookings}>  Checkout</button></Link>
        </div>
    );
}


export default Order;