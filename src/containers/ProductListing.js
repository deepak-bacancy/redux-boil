import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {setProduct} from "../redux/actions/productActions";

const ProductComponent = React.lazy(() => import('./ProductComponent'));

function ProductListing(props) {
  
  const dispatch = useDispatch()

  useEffect(() => {
    debugger
    fetchProducts()
  })
  
  const fetchProducts = async() => {
    await axios.get('https://fakestoreapi.com/products').then((response) => {
      dispatch(setProduct(response.data));
    }).catch((err) => {
    })
  }

  console.log("Product Listing")

  return (
    <div>
      <ProductComponent/>
    </div>
  );
}

export default ProductListing;
