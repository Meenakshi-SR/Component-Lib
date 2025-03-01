import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../src/Card";
import "@testing-library/jest-dom";

test("renders Card component", () => {
  const props = {
    title: "Card Title",
    subtitle: "Card Subtitle",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    footer: "Footer content",
  };

  render(<Card {...props} />);
  expect(screen.getByText("Card Title")).toBeInTheDocument();
  expect(screen.getByText("Card Subtitle")).toBeInTheDocument();
  expect(
    screen.getByText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    )
  ).toBeInTheDocument();
  expect(screen.getByText("Footer content")).toBeInTheDocument();
});
