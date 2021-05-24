import React from "react";
import renderer from "react-test-renderer";
import { PicCarousel } from "./PicCarousel";
import { carouselPost } from "../../fakeData/post";

describe("snapshot", () => {
  it("photo post", () => {
    const component = renderer.create(
      <PicCarousel
        className="carousel"
        pics={carouselPost.data.gallery_data.items}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
