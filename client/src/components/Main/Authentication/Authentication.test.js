import React from "react";
import { shallow } from "enzyme";
import Authentication from "./Authentication";

describe("Authentication", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Authentication />);
    expect(wrapper).toMatchSnapshot();
  });
});
