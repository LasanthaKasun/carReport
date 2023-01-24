import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Button from "../src/components/Button";

it("should render button component", () => {
  const component = renderer.create(<Button />);
  expect(component).toMatchSnapshot();
});

it("should render button with props", () => {
  render(<Button text="Back" onClick={null} role="backBtn" />);
  const backBtn = screen.getByRole("backBtn");
  expect(backBtn).toHaveTextContent("Back");
});
