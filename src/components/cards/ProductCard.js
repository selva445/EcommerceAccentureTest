import React, { useState } from "react";
import { Card, Tooltip } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Drawer, Button } from "antd";
import "../cards/Css/styles.css";
const { Meta } = Card;

export default function ProductCard({ product }) {
  console.log(product);
  const { index, isSale, productImage, productName, type, price } = product;

  return (
    <div>
      <div class="card border border-dark p-2 m-2">
        {isSale && (
          <div class="position-absolute bg-success text-white  px-2 m-2 imageanime">
            Sale!
          </div>
        )}
        <img
          class="card-img-top"
          src={`images/${productImage}`}
          alt="products"
        ></img>
        <div class="card-body">
          <h5 class="card-title">{productName}</h5>

          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{type}</li>
          <li class="list-group-item text-success font-weight-bold">{price}</li>
        </ul>
        <div class="card-body ">
          <a href="/" class="card-link">
            <ShoppingCartOutlined className="text-danger" /> <br />{" "}
            <p class="font-weight-bold text-secondary">Add to Cart </p>
          </a>
          <hr></hr>
          <a href={`/product/${index+1}`} class="card-link">
            <EyeOutlined className="text-warning" /> <br />{" "}
            <p class="font-weight-bold text-warning">View This Product </p>
          </a>
        </div>
      </div>
    </div>
  );
}
