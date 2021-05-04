import React, { useEffect, useState } from "react";
import jsonData from "../utils/jsondata/JsonProducts";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function ProductDetail() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadAllProducts();
  }, [product]);

  const params = useParams();
  const loadAllProducts = () => {
    setLoading(true);
    setProduct(jsonData[params.id - 1]);
    setLoading(false);
  };
  // Set the individual product by getting the params from router params URI
  const { index, isSale, productImage, productName, type, price } =
    product || {};

  // DeStructure the required fields.
  // Added Logical OR operator so it does not fail incase the data changes in Production
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7 p-2">
            {/* Carousel Component to  show product image*/}
            <Carousel showArrows={true} autoPlay infiniteLoop>
              <div>
                <img src={`../images/${productImage}`} alt="products" />
                <p className="legend">{productName}</p>
              </div>
            </Carousel>
          </div>
          {/* Display the product description */}
          <div className="col-md-5 p-2">
            <h1 className="p-3">{productName}</h1>
            <h1 className="p-3">{type}</h1>
            <h1 className="p-3">Price : {price} AUD </h1>
            {/* Only for Sale Components */}
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
