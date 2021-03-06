import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./filter.css";
import { switchFilter } from "./filterSlice";
import { getRedditData } from "../../containers/postContainer/postContainerSlice";

export function Filter(props) {
  const dispatch = useDispatch();
  const { currentFilter } = useSelector((state) => state.filter);
  const { currentSub } = useSelector((state) => state.search);
  useEffect(() => {
    const url = `https://www.reddit.com/r/${currentSub}/${currentFilter}.json`;
    dispatch(getRedditData(url));
    window.scrollTo(0, 0);
  });
  return (
    <div className="filter">
      <div className="buttons">
        <button
          className={currentFilter === "hot" ? "active" : "inactive"}
          onClick={() => dispatch(switchFilter({ filter: "hot" }))}
        >
          Hot
        </button>
        <button
          className={currentFilter === "new" ? "active" : "inactive"}
          onClick={() => dispatch(switchFilter({ filter: "new" }))}
        >
          New
        </button>
        <button
          className={currentFilter === "best" ? "active" : "inactive"}
          onClick={() => dispatch(switchFilter({ filter: "best" }))}
        >
          Best
        </button>
      </div>
      <div className="text">
        <h3>
          This project is still a work in progress, here are some of the things
          to be added in the future:
        </h3>
        <ul>
          <li>
            Loading more posts when a user's scroll reaches the bottom of the
            page
          </li>
          <li>S̶e̶a̶r̶c̶h̶ ̶b̶a̶r̶ ̶t̶o̶ ̶f̶i̶l̶t̶e̶r̶ ̶b̶y̶ ̶s̶u̶b̶r̶e̶d̶d̶i̶t̶</li>
          <li>Interface to browse comments on posts</li>
          <li>Improved mobile experience</li>
        </ul>
        <p class="myNote">Made with ❤️ by Quinn Sweeney</p>
      </div>
    </div>
  );
}
