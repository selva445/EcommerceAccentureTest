import React from "react";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "../Css/styles.css";

export default function ProductCard({ product }) {
  // DeStructure the required fields.
  // Added Logical OR operator so it does not fail incase the data changes in Production
  const { index, isSale, productImage, productName, type, price } =
    product || {}

  return (
    <div>
      {/* React Bootstrap component to display the card for sm-md-lg-xxl devices */}
      <div className="card border border-dark p-2 m-2">
        {/* Display only when a product sale is true */}
        {isSale && (
          <div className="position-absolute bg-success text-white  px-2 m-2 imageanime">
            Sale!
          </div>
        )}
        <img
          className="card-img-top"
          src={`images/${productImage}`}
          alt="products"
        ></img>
        <div className="card-body">
          <h5 className="card-title">{productName}</h5>

          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{type}</li>
          <li className="list-group-item text-success font-weight-bold">{price}</li>
        </ul>
        <div className="card-body ">
          {/* Need to Implement Add to Cart Functionality */}
          <a href="/" className="card-link">
            {/* ANt design Cart Logo */}
            <ShoppingCartOutlined className="text-danger" /> <br />{" "}
            <p className="font-weight-bold text-secondary">Add to Cart </p>
          </a>
          <hr></hr>
          <a href={`/product/${index + 1}`} className="card-link">
            {/* ANt design View  Logo */}
            <EyeOutlined className="text-warning" /> <br />{" "}
            <p className="font-weight-bold text-warning">View This Product </p>
          </a>
        </div>
      </div>
    </div>
  );
}
