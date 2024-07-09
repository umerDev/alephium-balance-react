import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders home view text", () => {
  //arrange
  render(<App />);
  const linkElement = screen.getByText(/Enter an alephium address/i);
  //assert
  expect(linkElement).toBeInTheDocument();
});

test("renders button for search", () => {
  //arrange
  render(<App />);
  const button = screen.getByRole("button", { name: "search" });
  //assert
  expect(button).toBeInTheDocument();
});
