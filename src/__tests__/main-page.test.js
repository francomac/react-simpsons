import React from "react";
import { render, screen } from "@testing-library/react";

import { MainPage } from "../components/main-page";

// eslint-disable-next-line testing-library/no-render-in-setup
beforeEach(() => render(<MainPage />));

describe("Main Page mount", () => {
  it("must display the main page title", () => {
    expect(
      screen.getByRole("heading", { name: /simpsons quotes/i })
    ).toBeInTheDocument();
  });
});

describe("Quotes List", () => {
  it("must display 3 quotes", async () => {

    expect(await screen.findAllByRole("listitem")).toHaveLength(3);
  });
});
