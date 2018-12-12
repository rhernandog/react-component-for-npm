import React from "react";
import { render, cleanup, getNodeText } from "react-testing-library";

// get the component
import RHTestComponent from "../src/index";

afterEach(cleanup);

test("Sample component test", () => {

  const { debug, getByTestId } = render(<RHTestComponent></RHTestComponent>);

  const sampleComponent = getByTestId("main-el");

  // sample component should be rendered
  expect( sampleComponent ).not.toBeNull();
  // sample component text
  expect( getNodeText(sampleComponent) ).toBe("JUST SOME CONTENT HERE.");

});
