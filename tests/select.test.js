import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Select from "../src/components/Select";

it("should render text area component", () => {
  const component = renderer.create(
    <Select
      data={[
        {
          id: 5,
          name: "Alfa Romeo",
        },
      ]}
    />
  );
  expect(component).toMatchSnapshot();
});

it("should render text area with props", () => {
  render(
    <Select
      label=""
      data={[
        {
          id: 5,
          name: "Alfa Romeo",
        },
      ]}
      onCustomeSelect={null}
      isRequired={true}
      error=""
      role=""
    />
  );
});

it("should render text area with error", () => {
  render(
    <Select
      label=""
      data={[
        {
          id: 5,
          name: "Alfa Romeo",
        },
      ]}
      onCustomeSelect={null}
      isRequired={true}
      error="Test"
      role=""
    />
  );
});
