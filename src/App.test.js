import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders home view text", () => {
  //arrange
  render(<App />);
  const linkElement = screen.getByText(/Enter an alephium address/i);
  //assert
  expect(linkElement).toBeInTheDocument();
});

test("renders button for increment", () => {
  //arrange
  render(<App />);
  const button = screen.getByRole("button", { name: "Increment" });
  //assert
  expect(button).toBeInTheDocument();
});

test("renders button for decrement", () => {
  //arrange
  render(<App />);
  const button = screen.getByRole("button", { name: "Decrement" });
  //assert
  expect(button).toBeInTheDocument();
});

test("increase counter by 1", () => {
  //arrange
  render(<App />);
  const button = screen.getByRole("button", { name: "Increment" });
  //act
  const buttonClick = fireEvent.click(button);
  //assert
  expect(screen.getByText(1)).toBeInTheDocument();
  expect(buttonClick).toBeTruthy();
});

test("decrease counter by 1", () => {
  //arrange
  render(<App />);
  const button = screen.getByRole("button", { name: "Decrement" });
  //act
  const buttonClick = fireEvent.click(button);
  //assert
  expect(screen.getByText(-1)).toBeInTheDocument();
  expect(buttonClick).toBeTruthy();
});

test("go to about page", () => {
  //arrange
  render(<App />);
  const link = screen.getByRole("link", { name: "About" });
  //act
  fireEvent.click(link);
  //assert
  expect(screen.getByText("on the contact page")).toBeInTheDocument();
});

test("go to about page, then back to home", () => {
  //arrange
  render(<App />);
  const aboutLink = screen.getByRole("link", { name: "About" });
  const homeLink = screen.getByRole("link", { name: "Home" });

  fireEvent.click(aboutLink);
  expect(screen.getByText("on the contact page")).toBeInTheDocument();

  fireEvent.click(homeLink);
  expect(screen.getByText("Enter an alephium address")).toBeInTheDocument();
});
