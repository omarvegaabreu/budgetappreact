import React from "react";
import { shallow } from "enzyme";
// import toJson from "enzyme-to-json";
import Header from "../../Components/Header";

test("should render header to dom", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
