import React from "react";
import { shallow } from "enzyme";
import { Post } from "./Post";
import renderer from "react-test-renderer";
import { imgPost, txtPost, vidPost } from "../../fakeData/post";
import { Provider } from "react-redux";
import { store } from "../../app/store";

describe("renders", () => {
  it("photo post", () => {
    const component = renderer.create(
      <Provider store={store}>
        <Post data={imgPost.data} />
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("text post", () => {
    const component = renderer.create(
      <Provider store={store}>
        <Post data={txtPost.data} />
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("video post", () => {
    const component = renderer.create(
      <Provider store={store}>
        <Post data={vidPost.data} />
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
