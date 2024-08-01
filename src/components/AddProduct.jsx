import React, { useState } from 'react'
import axiosInstance from '../helpers/axiosInstance';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const AddProduct = () => {

    let navigate = useNavigate();
    
    let [productData,setProductData]=useState({
        pname:"",
        pprice:"",
        pqty:"",
        pimg:""
    })
    
    let data=(e)=>{
        setProductData({...productData,[e.target.name]: e.target.value})
    }

    let handleSubmit=(e)=>{
        e.preventDefault();
        let payload=productData;
        axiosInstance.post("/products",payload)
        toast.success("Added Item")
        navigate("/viewproduct")
    }

  return (
    <div className='product-holder' onSubmit={handleSubmit}>
        <spam>Product Details</spam>
        <form action="">
            <div className='product-items'>
                <label htmlFor="">Product Name:</label>
                <input type='text' name="pname" placeholder='Enter Product Name' onChange={data}/>
            </div>
            <div className='product-items'>
                <label htmlFor="">Product Price:</label>
                <input type='text' name="pprice" placeholder='Enter Product Price' onChange={data}/>
            </div>
            <div className='product-items'>
                <label htmlFor="">Product Quantity:</label>
                <input type='text' name="pqty" placeholder='Enter Product Quantity' onChange={data}/>
            </div>
            <div className='product-items'>
                <label htmlFor="">Product Image (Path):</label>
                <input type='text' name="pimg" placeholder='Enter Product URL' onChange={data}/>
            </div>
            <div>
                <button>ADD TO CART</button>
            </div>
        </form>
    </div>
  )
}

export default AddProduct