import React from "react";
import { Filter } from "./Filter";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { store } from "../../app/store";

describe("snapshot", () => {
  it("main filter", () => {
    const component = renderer.create(
      <Provider store={store}>
        <Filter />
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
