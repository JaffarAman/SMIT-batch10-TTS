import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchSingleData();
  }, []);
  const fetchSingleData = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );

      console.log("response", response.data);
      setData(response.data);
    } catch (error) {
      console.log("error", error.message);
    }
  };
  console.log("data", data);
  return (
    <>
      <h1>Product Details </h1>

      <img src={data?.image} alt="" />
      {data?.title} 
      <br />
      {data?.price} 
      <br />
      {data?.description} 
      <br />
    </>
  );
};

export default ProductDetails;
