import React, { useEffect, useState } from "react";
import Jumbotron from "../cards/Jumbotron";
import LoadingCard from "../cards/LoadingCard";
import ProductCard from "../cards/ProductCard";
import jsonData from "../utils/jsondata/JsonProducts";

export default function Home() {
  // Initial Product,Types,Loading,filteredoption state for component to rerender
  const [products, setProducts] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterkey, setFilterKey] = useState(false);
  const [filter1, setFilter] = useState("");

  useEffect(() => {
    loadAllProducts();
    loadTypes();
  }, []);

  // Load the Data when the component is rendered for the first time from JSON.

  const loadAllProducts = () => {
    setLoading(true);
    setProducts(jsonData);
    setLoading(false);
  };

  // Load all the types of products into this state .This is used to filter products
  const loadTypes = () => {
    let result = [...new Set(jsonData.map((item) => item.type))];
    setTypes(result);
  };

  // used to handle dropdown  change for type selection
  const handleChangetype = (e) => {
    setFilter("");
    if (e.target.value === "All Products") {
      setProducts(jsonData);
      setFilterKey("All Products");
    } else {
      setFilterKey(e.target.value);
      const data_filter = jsonData.filter(
        (element) => element.type === e.target.value
      );
      setProducts(data_filter);
    }
  };
  // Added Text Filter to filter results
  const settextFilter = (e) => {
    setFilter(e.target.value.toLowerCase());
    setFilterKey(e.target.value);
  };
  return (
    <>
      <div className="row  justify-content-end align-items-center text-center ">
        <div className="col-sm-3 text-black p-2">
          <h2>Filter Products</h2>

          {/* Types Dropdown Mapped to Select Dropdown values */}
          <select
            name="category"
            className="form-control"
            onChange={handleChangetype}
            data-testid="select"
          >
            <option>All Products</option>
            {types.map((c) => (
              <option key={c} value={c} data-testid="select-option">
                {c}
              </option>
            ))}
          </select>
        </div>
        {/* Search Text Field for Refined Search */}
        <div className="col-sm-3 text-black p-2 m-2">
          <h2>Search Products</h2>

          <input
            type="text"
            className="form-control"
            id="category"
            data-testid="category"
            placeholder="Bitter/Megumi/Blonde ..etc"
            value={filter1}
            onChange={settextFilter}
          />
        </div>
      </div>
      <div className="row  justify-content-center align-items-center text-center ">
        <div className="col-lg-12 col-md-12 col-sm-12 text-black">
          {/* Filter Products based on Type */}

          <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
            {/* Typewriter effect for Text */}
            {filterkey && (
              <Jumbotron text={` ${filterkey} Results`}></Jumbotron>
            )}
            {!filterkey && <Jumbotron text="New Arrivals"></Jumbotron>}
          </h4>
          {loading ? (
            // Loading Card Spinner Component
            <LoadingCard count={3} />
          ) : (
            <div className="row">
              {products
                .filter((c) => c.productName.toLowerCase().includes(filter1))
                .map((product) => (
                  <div key={product.index} className="col-md-4">
                    {/* Call the  ProductCard Component while sending each product as props*/}
                    <ProductCard product={product} />
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
