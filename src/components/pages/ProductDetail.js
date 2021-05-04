import React, { useEffect, useState } from "react";
import Jumbotron from "../cards/Jumbotron";
import LoadingCard from "../cards/LoadingCard";
import ProductCard from "../cards/ProductCard";
import jsonData from "../utils/jsondata/JsonProducts";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Laptop from "../utils/images/Product_1.jpeg";

export default function ProductDetail() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadAllProducts();
  }, [product]);

  const params = useParams();
  const loadAllProducts = () => {
    setLoading(true);
    setProduct(jsonData[params.id-1]);
    setLoading(false);
  };

  const { index, isSale, productImage, productName, type, price } = product||{};

  console.log(productImage);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7 p-2">
            <Carousel showArrows={true} autoPlay infiniteLoop>
              <div>
                <img src={`../images/${productImage}`} alt="products" />
                <p className="legend">{productName}</p>
              </div>
            </Carousel>
          </div>
          <div className="col-md-5 p-2">
          <h1 className="p-3">{productName}</h1>
          <h1 className="p-3">{type}</h1>
          <h1 className="p-3">Price : {price} AUD </h1>
          {isSale && (
          <h1 className="p-3 bg-success">
            This Product is currently under Sale. Grab Quickly!!!
          </h1>
        )}
          </div>
        </div>
      </div>
    </>
  );
}
