import React from "react";
import { PostContainer } from "./PostContainer";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { store } from "../../app/store";

describe("snapshot", () => {
  it("main", () => {
    const component = renderer.create(
      <Provider store={store}>
        <PostContainer />
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
