import React, { useState , useEffect } from 'react'
import axiosInstance from "../helpers/axiosInstance"
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateProduct = () => {

  let {id} = useParams()  ; 
  let navigate = useNavigate();
  let [productData , setProductData] = useState({
      pname : "" , 
      pprice : "" , 
      pqty : "" , 
      pimg : ""
  })

  let {pname , pprice , pqty } = productData ; 

  let data = (e) => {
      setProductData({ ...productData, [e.target.name]: e.target.value })
  }

  let handleSubmit = (e)=>{
    e.preventDefault() ;
    let payload = productData ;
   
    axiosInstance.put(`/products/${id}` , payload)
    toast.warning("UPDATED ITEM ")
    navigate("/viewproduct")

  }

     useEffect(()=>{
        let fetchData = async()=>
        {
            let {data} = await  axiosInstance.get(`/products/${id}`)
            setProductData(data)
        } 
            fetchData()
        },[id])

  return (
    <div className='product-holder' onSubmit={handleSubmit}>
        <spam>Product Details</spam>
        <form action="">
            <div className='product-items'>
                <label htmlFor="">Product Name:</label>
                <input type='text' name="pname" placeholder='Enter Product Name' value={pname} onChange={data}/>
            </div>
            <div className='product-items'>
                <label htmlFor="">Product Price:</label>
                <input type='text' name="pprice" placeholder='Enter Product Price' value={pprice} onChange={data}/>
            </div>
            <div className='product-items'>
                <label htmlFor="">Product Quantity:</label>
                <input type='text' name="pqty" placeholder='Enter Product Quantity' value={pqty} onChange={data}/>
            </div>
            
            <div>
                <button onClick={handleSubmit}>Update</button>
            </div>
        </form>
    </div>
  )
}

export default UpdateProduct
