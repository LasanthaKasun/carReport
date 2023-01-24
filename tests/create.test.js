import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import Create from "../src/pages/create";

it("should render damage report create page", () => {
  const component = renderer.create(<Create />);
  expect(component).toMatchSnapshot();
});

it("should validate brand onChangeValue function", () => {
  render(<Create />);
  const brandOption = screen.getByRole("brand");
  fireEvent.change(brandOption, { target: { value: "BMW" } });
  expect(brandOption.value).toBe("BMW");
  fireEvent.change(brandOption, { target: { value: "" } });
  expect(brandOption.value).toBe("");
});

it("should validate model onChangeValue function", () => {
  render(<Create />);
  const modelOption = screen.getByRole("model");
  fireEvent.change(modelOption, { target: { value: "BMW" } });
  expect(modelOption.value).toBe("");
});

it("should validate next button", () => {
  const mockOnClick = jest.fn();
  render(<Create />);
  const nextBtn = screen.getByRole("nextBtn");
  fireEvent.click(nextBtn);
  expect(mockOnClick).toHaveBeenCalledTimes(0);
});
