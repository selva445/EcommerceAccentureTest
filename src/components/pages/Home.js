import React, { useEffect, useState } from "react";
import Jumbotron from "../cards/Jumbotron";
import LoadingCard from "../cards/LoadingCard";
import ProductCard from "../cards/ProductCard";
import jsonData from "../utils/jsondata/JsonProducts";
import ProductDetail from "./ProductDetail";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = () => {
    setLoading(true);
    setProducts(jsonData)
    setLoading(false);
  };

  console.log(products)
  return (
    <div className="row  justify-content-center align-items-center text-center ">
      <div className="col-lg-12 col-md-12 col-sm-12 text-black">
        <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
          <Jumbotron text="New Arrivals"></Jumbotron>
        </h4>
        {loading ? (
          <LoadingCard count={3} />
        ) : (
            <div className="row">
              {products.map((product) => (
                <div key={product.index} className="col-md-4">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
      </div>
    </div>
  );
}
