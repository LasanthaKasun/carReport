import "@testing-library/jest-dom";
import renderer from 'react-test-renderer';
import Home from "../src/pages";

it("should render landing page", () => {
    const component = renderer.create(<Home />);
    expect(component).toMatchSnapshot()
});
