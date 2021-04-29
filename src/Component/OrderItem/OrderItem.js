import React from 'react';
import './OrderItem.css'

const OrderItem = (props) => {
    const {name,price,_id} = props.items
    console.log(props.items._id)

    const handleDelete = (id) =>{
        console.log('hello delete')
        fetch(`https://cherry-surprise-82565.herokuapp.com/delete/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result =>{
            console.log('success')
        })
    }
    return (
        <div>
            <table>
                <tr>
                    <th>Product Name</th>
                    <th>Wight</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>{name}</td>
                    <td>Wight</td>
                    <td>{price}</td>
                    <td><button onClick={() =>handleDelete(_id)}>Delete</button></td>
                </tr>
            </table>
        </div>
    );
};

export default OrderItem;