import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import ImageUpload from "../src/components/ImageUpload";

const onSuccessResult = jest
  .fn()
  .mockReturnValue(Promise.resolve({ uuid: "", url: "" }, ""));
const imgObject = "";

it("should render image uploader", () => {
  const component = renderer.create(<ImageUpload />);
  expect(component).toMatchSnapshot();
});

it("should disable upload button when image is not choose", () => {
  render(
    <ImageUpload
      onSuccessResult={onSuccessResult}
      imgObject={imgObject}
      error=""
    />
  );
  const uploadBtn = screen.getByRole("uploadButton");
  const uploadFile = screen.getByRole("uploadFile");
  expect(uploadBtn).toBeDisabled();
  window.URL.createObjectURL = jest.fn();
  fireEvent.change(uploadFile, { target: { files: "1" } });
  expect(uploadFile.files).toBe("1");
  expect(uploadBtn).not.toBeDisabled();
});
