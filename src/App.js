import React from "react";
import "./App.css";
import { PostContainer } from "./containers/postContainer/PostContainer";
import { Filter } from "./features/filter/Filter";

function App() {
  return (
    <div className="App">
      <PostContainer />
      <Filter />
    </div>
  );
}

export default App;
