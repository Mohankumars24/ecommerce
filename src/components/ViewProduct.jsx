import React, { useEffect, useState } from 'react'
import axiosInstance from '../helpers/axiosInstance'

const ViewProduct = () => {

  let [product,setProduct]=useState([])
  
  useEffect(()=>{
    let fetchData=async ()=>{
      let {data}=await axiosInstance.get("/products")
      setProduct(data)
    }
    fetchData()
  },[])

  return (
    <div className='product-container'>
         {product.map((x)=>{
          return(
            <div className='cards'>
              <img style={{height:"100px",width:"100px"}} src={x.pimg} alt="" />
              <h1>Product Name: {x.pname}</h1>
              <h1>Product Price: {x.pprice}</h1>
              <h1>Product Quantity: {x.pqty}</h1>
              <button>Update</button>
              <button>Delete</button>
            </div>
          )
         })}
    </div>
  )
}

export default ViewProduct