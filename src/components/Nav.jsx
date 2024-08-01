import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <div>
            <Link to={"/"}>Home</Link>
        </div>
        <div>
            <Link to={"/viewproduct"}>ViewProduct</Link>
        </div>
        <div>
            <Link to={"/addproduct"}>AddProduct</Link>
        </div>
    </nav>
  )
}

export default Nav