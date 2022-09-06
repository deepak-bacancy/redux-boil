import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {selectedProduct , removeSelectedProduct} from "../redux/actions/productActions";
import { useParams } from 'react-router';
import {Link} from "react-router-dom"

function ProductDetail() {
  
  const product = useSelector((state) => state.product )
  const dispatch = useDispatch()
  const {productID} = useParams()

  
  const fetchProducts = async() => {
    await axios.get(`https://fakestoreapi.com/products/${productID}`).then((response) => {
      dispatch(selectedProduct(response.data));
    }).catch((err) => {
    })
  }

  useEffect(() => {
    if(productID){
      fetchProducts()
    } 
    return () => {
      debugger
      dispatch(removeSelectedProduct())
    }
  }, [productID])
  
  console.log("Product Detail")

  return (
    <div>
    <div className='back'>
      <Link to="/products"> Back </Link>
    </div>
     <h1>{product.title}</h1>
     <img alt='Clothes' src={product.image} height="500px" />
     <p style={{padding: 20 , fontSize: 18 , fontWeight: 500}}>{product.description}</p>
    </div>
  );
}

export default ProductDetail;