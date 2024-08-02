import React, { useEffect, useState } from 'react'
import axiosInstance from '../helpers/axiosInstance'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ViewProduct = () => {

  let [products,setProducts]=useState([])
  
  let navigate=useNavigate();

  useEffect(()=>{
    let fetchData=async ()=>{
      let {data}=await axiosInstance.get("/products")
      setProducts(data)
    }
    fetchData()
  },[])

  let handleDelete=((id)=>{
    axiosInstance.delete(`/products/${id}`)
    toast.error("ITEM REMOVED")
    navigate("/")
  })

  return (
    <div className='product-container'>
         {products.map((x)=>{
          return(
            <div className='cards'>
              <img style={{height:"100px" , width:"100px"}} src={`https://api.dicebear.com/9.x/personas/svg?seed=${x.id}`} alt="" />
              <h1>Product Name: {x.pname}</h1>
              <h1>Product Price: {x.pprice}</h1>
              <h1>Product Quantity: {x.pqty}</h1>
              <button> <Link to={`/updateproduct/${x.id}`} >Update</Link> </button>
              <button onClick={()=>{handleDelete(x.id)}}>Delete</button>
            </div>
          )
         })}
    </div>
  )
}

export default ViewProduct