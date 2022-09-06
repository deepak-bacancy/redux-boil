import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"

function ProductComponent() {
  const products = useSelector((state) => state)

  console.log("Product Component")


  return (
    <ul className='ul-list'>
      {
        products?.allProducts?.products?.map((product) => {
          return(
            <li className='list' key={product.id}>
                <div>
                  <p style={{fontSize: 18 , fontWeight: "bold"}}>{product.category}</p>
                  <img src={product.image} alt="Logo" width={70} height={70}/>
                </div>
                <div>
                  <div className='trun'>{product.title}</div>
                  <p className='block-with-text'>{product.description}</p>
                </div>
                <Link to={`/products/${product.id}`}>
                  View Detail
                </Link>
            </li>
          )
        })
      }
    </ul>
  );
}

export default ProductComponent;
