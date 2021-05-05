import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";

test("Verify User can Click View Product", async () => {
    
  render(<ProductCard />);
  fireEvent.click(screen.getByText("View This Product"));

});
