import axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { userContext } from '../../App';
import './add.css'

const AddProducts = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [image, setImage] = useState(null)
    const [loggedInUser, setLoggedInUser] = useContext(userContext);



    const onSubmit = data => {
        const addData = {
            name: data.name,
            price: data.price,
            imageURL: image,
            email:loggedInUser.email
        }
        const url = `https://cherry-surprise-82565.herokuapp.com/addProduct`
        console.log(addData)
        fetch(url, {
            method: "POST",
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(addData)
        })
            .then(res => console.log('success'))
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'a37631b9a9a1b994a238dcbcf582ceac')
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImage(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
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
                        <h4>Add Product</h4>
                            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                <label>Product Name</label><br></br>
                                <input className="input" name="name"  ref={register} /><br></br>
                                <label>Product Price</label><br></br>
                                <input className="input" name="price" ref={register} /><br></br><br></br>
                                <div className="d-flex">
                                <input type="submit" />
                                <input className="upload" name="exampleRequired" type="file" onChange={handleImageUpload} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;