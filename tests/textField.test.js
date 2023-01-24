import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import TextField from "../src/components/TextField";

it("should render text area component", () => {
  const component = renderer.create(<TextField />);
  expect(component).toMatchSnapshot();
});

it("should render text field with props", () => {
  render(
    <TextField label="" isRequired={true} onChangeText={null} error={""} />
  );
});

it("should render text field with error", () => {
  render(
    <TextField label="" isRequired={true} onChangeText={null} error={"error"} />
  );
});

it("should render text field with hidden", () => {
  render(
    <TextField
      label=""
      hidden={true}
      isRequired={true}
      onChangeText={null}
      error={"error"}
    />
  );
});
