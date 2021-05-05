import React from "react";
import { render, fireEvent,screen } from "@testing-library/react";
import Home from "./Home";
import Jumbotron from "../cards/Jumbotron"

test("Verify  Filter Search text Form is Displayed", () => {
  render(<Home />);
  const input = screen.getByPlaceholderText("Bitter/Megumi/Blonde ..etc");
  expect(input).toBeTruthy();
});

test("Verify User can Choose Filter Search Products DropDown", async() => {
    render(<Home />);
    fireEvent.change(screen.getByTestId("select"), {
      target: { value: "Wine" },
    });
    render(<Jumbotron />);
  });
