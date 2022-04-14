import React from "react";
import { render, screen } from "@testing-library/react";

import { MainPage } from "../components/main-page";

describe("Main Page mount", () => {
  it("must display the main page title", () => {
    render(<MainPage />);
    expect(
      screen.getByRole("heading", { name: /simpsons quotes/i })
    ).toBeInTheDocument();
  });
});

describe("Quotes List", () => {
    it("must display 3 quotes", async () => {
      render(<MainPage />)
  
      expect(await screen.findAllByRole("listitem")).toHaveLength(3)
    })
  })