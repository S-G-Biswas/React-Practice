import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../Components/Product";

const productURL =
  "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products";

export interface products {
  id?: string;
  brand: string;
  img: string;
  price: number;
  category: string;
  details: string;
}

function Home() {
  const [productsData, setProductsData] = useState<products[]>([]);
  const getProducts = async () => {
    const res = await axios.get(productURL);
    const data = res.data.data;
    return data;
  };
  useEffect(() => {
    // Fetch the data for initial products here
    getProducts().then((res) => {
      setProductsData(res);
      console.log(res);
    });
  }, []);

  return (
    <>
      <div>
        {productsData.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </>
  );
}

export default Home;
