import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import TextArea from "../src/components/TextArea";

it("should render text area component", () => {
  const component = renderer.create(<TextArea />);
  expect(component).toMatchSnapshot();
});

it("should render text area with props", () => {
  render(
    <TextArea label="" isRequired={true} onChangeText={null} error={""} />
  );
});

it("should render text area with error", () => {
  render(
    <TextArea label="" isRequired={true} onChangeText={null} error={"error"} />
  );
});
