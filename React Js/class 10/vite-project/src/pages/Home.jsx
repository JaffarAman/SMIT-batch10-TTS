import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products/");

      console.log("response", response.data);
      setData(response.data);
    } catch (error) {
      console.log("error", error.message);
    }
  };
  console.log("data", data);
  return (
    <>
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        {data?.map((product, index) => {
          return (
            <Card
              id={product.id}
              image={product.image}
              title={product.title}
              desc={product.description}
              key={product.id}
            />
          );
        })}
      </div>
    </>
  );
};

const Card = ({ id, image, title, desc }) => {
  const navigate = useNavigate();
  return (
    <div className="w-96 border shadow">
      <img src={image} className="w-full h-32 object-contain" alt="" />
      <h1 className="font-bold"> {title} </h1>
      <p> {desc} </p>

      <button
        className="bg-gray-800 w-[70px] rounded text-white"
        onClick={() => navigate(`/item/${id}`)}
      >
        VIEW
      </button>
    </div>
  );
};

export default Home;
