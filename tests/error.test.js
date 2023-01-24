import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import Error from "../src/components/Error";

it("should render error component", () => {
  const component = renderer.create(<Error />);
  expect(component).toMatchSnapshot();
});