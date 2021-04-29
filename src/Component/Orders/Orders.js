import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import OrderItem from '../OrderItem/OrderItem';

const Orders = () => {
    const [selectItem, setSelectItem] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    useEffect(() => {
        // const url = (`http://localhost:5000/selected`)
        fetch("https://cherry-surprise-82565.herokuapp.com/selected")
            .then(res => res.json())
            .then(data => setSelectItem(data))
    }, [])
    return (
        <div>
            <div className="container body">
                <div className="row">
                    <div className="d-flex">
                        <div className="clo-md-4 sidebar">
                            <h3>Easy Shope</h3>
                            <h6>Manage Product</h6>
                        </div>
                        <div className="col-md-8 addInput">
                            <h4>Manage Product</h4>
                            {
                                selectItem.map(item => <OrderItem items={item}></OrderItem>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;